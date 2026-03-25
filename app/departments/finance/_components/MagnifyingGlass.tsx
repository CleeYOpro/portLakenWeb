"use client";
import { useRef, useState, useCallback, useEffect } from "react";
interface SpendingItem { category: string; pct: number; amount: string; yoy: string; color: string; }
interface Props { spending: SpendingItem[]; }
const GLASS_R = 80; const MAGNIFY = 1.8; const HANDLE_H = 52; const HANDLE_W = 14; const D = GLASS_R * 2;
export default function MagnifyingGlass({ spending }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ mx: 0, my: 0, px: 0, py: 0 });
  useEffect(() => {
    if (!wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    setPos({ x: r.width / 2, y: r.height / 2 });
  }, []);
  const clamp = useCallback((x: number, y: number) => {
    if (!wrapRef.current) return { x, y };
    const r = wrapRef.current.getBoundingClientRect();
    return { x: Math.min(Math.max(x, GLASS_R), r.width - GLASS_R), y: Math.min(Math.max(y, GLASS_R), r.height - GLASS_R) };
  }, []);
  const getRevealedIndex = useCallback((gx: number, gy: number): number => {
    if (!barsRef.current || !wrapRef.current) return -1;
    const wrapRect = wrapRef.current.getBoundingClientRect();
    const absY = wrapRect.top + gy; const absX = wrapRect.left + gx;
    const rows = barsRef.current.querySelectorAll<HTMLElement>("[data-row]");
    for (let i = 0; i < rows.length; i++) {
      const r = rows[i].getBoundingClientRect();
      if (absY >= r.top && absY <= r.bottom && absX >= r.left && absX <= r.right) return i;
    }
    return -1;
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !pos || !barsRef.current || !wrapRef.current) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    const cx = GLASS_R; const cy = GLASS_R;
    const revIdx = getRevealedIndex(pos.x, pos.y);
    const wrapRect = wrapRef.current.getBoundingClientRect();
    ctx.clearRect(0, 0, D, D);
    ctx.save();
    ctx.beginPath(); ctx.arc(cx, cy, GLASS_R - 2, 0, Math.PI * 2); ctx.clip();
    ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, D, D);
    const rows = barsRef.current.querySelectorAll<HTMLElement>("[data-row]");
    spending.forEach((item, i) => {
      const row = rows[i]; if (!row) return;
      const rowRect = row.getBoundingClientRect();
      const rowCY = rowRect.top + rowRect.height / 2 - wrapRect.top;
      const rowLX = rowRect.left - wrapRect.left;
      const rowW = rowRect.width;
      const dy = (rowCY - pos.y) * MAGNIFY; const dx = (rowLX - pos.x) * MAGNIFY;
      const drawX = cx + dx; const drawY = cy + dy;
      const drawW = rowW * MAGNIFY; const barH = 10 * MAGNIFY; const barY = drawY + 12 * MAGNIFY;
      ctx.fillStyle = "#1e3a8a"; ctx.font = `600 ${9 * MAGNIFY}px system-ui,sans-serif`;
      ctx.fillText(item.category, drawX, drawY + 4 * MAGNIFY);
      if (i === revIdx) {
        ctx.fillStyle = "#1e3a8a"; ctx.font = `bold ${10 * MAGNIFY}px monospace`;
        const amtW = ctx.measureText(item.amount).width;
        ctx.fillText(item.amount, drawX + drawW - amtW, drawY + 4 * MAGNIFY);
      } else {
        ctx.fillStyle = "#94a3b8"; ctx.font = `500 ${8 * MAGNIFY}px system-ui,sans-serif`;
        const pct = `${item.pct}%`;
        ctx.fillText(pct, drawX + drawW - ctx.measureText(pct).width, drawY + 4 * MAGNIFY);
      }
      ctx.fillStyle = "#f1f5f9"; ctx.beginPath();
      (ctx as any).roundRect(drawX, barY, drawW, barH, barH / 2); ctx.fill();
      ctx.fillStyle = item.color; ctx.beginPath();
      (ctx as any).roundRect(drawX, barY, drawW * (item.pct / 100), barH, barH / 2); ctx.fill();
    });
    ctx.restore();
    ctx.beginPath(); ctx.arc(cx, cy, GLASS_R - 2, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(148,175,210,0.75)"; ctx.lineWidth = 4; ctx.stroke();
    ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, GLASS_R - 4, 0, Math.PI * 2); ctx.clip();
    const g = ctx.createRadialGradient(cx - 26, cy - 26, 4, cx, cy, GLASS_R);
    g.addColorStop(0, "rgba(255,255,255,0.4)"); g.addColorStop(0.5, "rgba(255,255,255,0.04)"); g.addColorStop(1, "rgba(180,210,255,0.1)");
    ctx.fillStyle = g; ctx.fillRect(0, 0, D, D); ctx.restore();
  }, [pos, spending, getRevealedIndex]);
  const startDrag = useCallback((clientX: number, clientY: number) => {
    if (!pos) return;
    setDragging(true);
    dragStart.current = { mx: clientX, my: clientY, px: pos.x, py: pos.y };
  }, [pos]);
  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (!dragging) return; setPos(clamp(dragStart.current.px + e.clientX - dragStart.current.mx, dragStart.current.py + e.clientY - dragStart.current.my)); };
    const onTouch = (e: TouchEvent) => { if (!dragging) return; const t = e.touches[0]; setPos(clamp(dragStart.current.px + t.clientX - dragStart.current.mx, dragStart.current.py + t.clientY - dragStart.current.my)); };
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove); window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouch, { passive: true }); window.addEventListener("touchend", onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); window.removeEventListener("touchmove", onTouch); window.removeEventListener("touchend", onUp); };
  }, [dragging, clamp]);
  return (
    <div ref={wrapRef} className="relative w-full select-none" style={{ minHeight: 360 }}>
      <div ref={barsRef} className="space-y-6 pt-2 pb-2 w-full">
        {spending.map((item, i) => (
          <div key={i} data-row={i} className="w-full">
            <div className="flex justify-between text-sm font-semibold text-port-navy mb-2">
              <span>{item.category}</span>
              <div className="flex gap-3 items-center">
                <span>{item.pct}%</span>
                <span className="font-mono blur-[5px] opacity-25 pointer-events-none">{item.amount}</span>
                <span className={`text-xs ${item.yoy.startsWith("+") ? "text-green-600" : "text-red-500"}`}>{item.yoy}</span>
              </div>
            </div>
            <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${item.pct}%`, backgroundColor: item.color }} />
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-port-slate/40 text-center mt-3 italic">drag the glass over a bar to reveal the amount</p>
      {pos && (
        <div className="absolute" style={{ left: pos.x - GLASS_R, top: pos.y - GLASS_R, width: D, height: D + HANDLE_H, zIndex: 30, cursor: dragging ? "grabbing" : "grab" }}
          onMouseDown={(e) => { e.preventDefault(); startDrag(e.clientX, e.clientY); }}
          onTouchStart={(e) => { const t = e.touches[0]; startDrag(t.clientX, t.clientY); }}>
          <canvas ref={canvasRef} width={D} height={D} style={{ borderRadius: "50%", display: "block", boxShadow: "0 12px 40px rgba(30,58,138,0.18),0 2px 8px rgba(30,58,138,0.1)" }} />
          <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: HANDLE_W, height: HANDLE_H, borderRadius: HANDLE_W / 2, background: "linear-gradient(175deg,#b0c8e0 0%,#6a8faf 45%,#3a5f80 100%)", boxShadow: "2px 6px 14px rgba(30,58,138,0.28),inset 1px 0 3px rgba(255,255,255,0.35)" }} />
        </div>
      )}
    </div>
  );
}
