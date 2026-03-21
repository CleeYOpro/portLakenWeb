import SDLCWheel from "@/app/references/_components/SDLCWheel";

import Image from "next/image";
import {
  WeightedScrollProvider,
  WeightedScrollLayer,
} from "@/app/components/WeightedScroll";
import {
  ScrollRevealText,
  ScrollReveal,
  ScrollRevealStagger,
  ScrollRevealStaggerItem,
} from "@/app/components/ScrollReveal";
import {
  FaClipboardList,
  FaCheckCircle,
  FaMapMarkedAlt,
  FaAnchor,
  FaCode,
  FaEnvelope,
  FaArrowRight,
  FaLongArrowAltRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiGoogle,
  SiVercel,
  SiNetlify,
  SiNodedotjs,
} from "react-icons/si";

const referenceCards = [
  {
    icon: FaClipboardList,
    title: "Worklog",
    description: "",
    pdfHref: "/worklog.pdf",
  },
  {
    icon: FaCheckCircle,
    title: "Copyright Checklist",
    description: "",
    pdfHref: "/copyright.pdf",
  },
];

type SourceGroup = { group: string; note?: string; urls: string[] };

const imageSources: SourceGroup[] = [
  {
    group: "Unsplash",
    urls: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80",
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
      "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?w=1200&q=80",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&q=80",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&q=80",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80",
      "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1582655432879-67d4fedc6f57?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1541802645635-11f2286a7482?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1472746729193-26ff3cbb4af7?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
      "https://images.unsplash.com/photo-1468421870903-4df1664ac249?w=800&q=80",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80",
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80",
      "https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?w=600&q=80",
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80",
      "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?w=600&q=80",
      "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=600&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=600&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3c56?w=800&q=80",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80",
      "https://images.unsplash.com/photo-1551913902-c92207136625?w=600&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80",
      "https://images.unsplash.com/photo-1526243741027-444d633d7365?w=1200&q=80",
      "https://images.unsplash.com/photo-1540979388789-7cee28a1cdc9?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f269a90c33?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80",
    ],
  },
  {
    group: "Pacific NW & Regional",
    urls: [
      "https://www.washingtonruralheritage.org/digital/api/singleitem/image/nols/2636/default.jpg",
      "https://www.southsoundtalk.com/wp-content/uploads/2020/11/fishing-crew-of-the-schooner-Union-Jack-may-1913-UW-library.jpg",
      "https://depts.washington.edu/depress/images/kirkland_coop_432.jpg",
      "https://www.thedailyworld.com/wp-content/uploads/2022/11/30983987_web1_221112-ADW-Hurricane-Ridge-winter_1.jpg",
      "https://www.cascadiadaily.com/wp-content/uploads/2025/04/01-Little-Squamish-Pier-20250403-SO-1536x1025.jpg",
      "https://olympicpeninsula.org/wp-content/uploads/2024/09/port-angeles-wa-city-pier-hdr-e1727213387696.jpg",
      "https://olympicpeninsula.org/wp-content/uploads/2018/07/Hall-of-Mosses-Trail-Hoh-Rain-Forest-2.jpg",
      "https://stateofwatourism.com/wp-content/uploads/2022/07/Rain-Forest-Olympic-Peninsula-9699-narrow.jpg",
      "https://www.visitportangeles.com/visit_port_angeles_uploads/2025/12/port-angeles-wa-aerial-view.jpg",
      "https://experience-olympia.s3.amazonaws.com/imager/files_idss_com/C405/6851cc95-b115-4b38-8e54-46ebcde289b1_e45adf5f6bc0c5c2a30a39868f44eab6.jpg",
      "https://cdn.allolympicpark.com/images/content/22082_19364_Strait_of_Juan_de_Fuca_Cape_Flattery_lg.jpg",
      "https://peakbaggerblobs.blob.core.windows.net/pbphoto/p515L.jpg",
      "https://www.bellevuereporter.com/wp-content/uploads/2022/06/29337375_web1_Marymoor-Park-concert-series_1.jpg",
      "https://images.seattletimes.com/wp-content/uploads/2021/03/03122021_cherry_142721.jpg?d=2040x1327",
      "https://nrs.objectstore.gov.bc.ca/kuwyyf/frontcountry_camping_RS_8873_82ab7cecb1.jpg",
      "https://bellingham.objects.liquidweb.services/photos/1164-oyster-dome-whatcom-county-1200x800.jpg",
      "https://whidbeycamanoislands.com/wp-content/uploads/2016/04/DNS9435.jpg",
    ],
  },
  {
    group: "Port of PA & Marinas",
    urls: [
      "https://portofpa.com/wp-content/uploads/2022/03/history1-scaled.jpg",
      "https://portofpa.com/wp-content/uploads/2022/03/harboroverview.jpg",
      "https://img.marinas.com/v2/f63bd300ad0c2f3beb6433eeaa83227893a6076ebac8cc31654831630120f6a9.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjucECqyJ6PgFSIj322xZmnd3j8mmjcJZFkaPDcUZ1XxurZp4KxizVZYqAaNOioJPGtxocrReMtSbjho4xhfJF_KECuMn14iV8Es-zl40O9tOgjvhgiiF4f6hjgszW_AySBgKnEH1BtwA4/s1600/NEREID+at+inner+dock.jpeg",
    ],
  },
  {
    group: "Wikipedia / Wikimedia",
    urls: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Lincoln_School%2C_Port_Angeles%2C_WA_%282%29.jpg",
    ],
  },
  {
    group: "Others",
    note: "public domain / stock",
    urls: [
      "https://uploads.visitseattle.org/2023/05/09125333/RachaelJones_Skyline-Banner_2.jpg",
      "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/41b572f9-d32c-4939-ab78-1c2aad587828",
      "https://pixabay.com/images/download/x-1351569_1920.jpg",
      "https://pixabay.com/images/download/x-1598473_1920.jpg",
      "https://pixabay.com/images/download/x-7128531_1920.jpg",
      "https://miro.medium.com/v2/resize:fit:5000/1*wsub054vaWFYHFsCwoSCXA.jpeg",
      "https://static.stacker.com/s3fs-public/styles/1280x720/s3/36utahKGSM_0.png?token=xEcg5fA5",
      "https://erepublic.brightspotcdn.com/dims4/default/9f34b54/2147483647/strip/true/crop/5120x2670+0+210/resize/840x438!/quality/90/",
      "https://s3.us-east-1.amazonaws.com/jensenhughes/1920x1000_Web-Headers/_1940x620_crop_center-center_90_none/154188/EmergMgmt_Command-Center_iStock-158554627_OVL_1920x1000.webp",
      "https://cdn.geekwire.com/wp-content/uploads/2016/12/09-06Westlake_TerryBuilding_print.jpg",
      "https://www.hillmannconsulting.com/wp-content/uploads/2023/06/Affordable-Housing-Complex-1.jpg",
      "https://outdoor-society.com/wp-content/uploads/2018/04/MP7A1677-1.jpg",
      "https://images.trvl-media.com/place/6219551/4ada606a-cc8f-4451-9010-293cace04a6b.jpg",
      "https://www.smartmeetings.com/wp-content/uploads/2015/11/washington-cover-dukes-chowder-house-1.jpg",
      "https://hmcarchitects.com/wp-content/uploads/image5.png",
      "https://pixabay.com/images/download/image-2935360_1920.png",
      "https://www.unleash.ai/wp-content/uploads/2023/06/Indeed-logo1-white.png",
      "https://wp.bibbeo.com/wp-content/uploads/2025/04/indeed-logo.webp",
      "https://www.beecreekphoto.com/images/xl/austin-skyline-auditorium-shores-twilight-DR50215.jpg",
      "https://thumbs.dreamstime.com/b/diverse-business-team-stacking-hands-showing-unity-group-people-their-together-symbolizing-teamwork-collaboration-support-434215192.jpg",
      "https://thediversitymovement.com/wp-content/uploads/2024/01/iStock-1481369283-1024x576.jpg",
      "https://thumbs.dreamstime.com/b/colleagues-laugh-chat-modern-office-cafe-coffee-break-group-coworkers-share-joyful-moment-bright-connect-424644392.jpg",
      "https://media.istockphoto.com/id/2082172331/photo/full-length-of-multicultural-friends-walking-in-city-park-and-having-fun.webp",
      "https://riverheadlocal.com/wp-content/uploads/2025/01/2025_0120_Martin-Luther-King-Lincoln-Memorial-28-Aug-1963-681x516.jpg",
      "https://foxbaltimore.com/resources/media2/16x9/3851/986/0x361/90/63423fb2-22ce-4454-aed0-68d5eab9dc17-1TOP5_ChristmasVillageinBaltimore2022_heatedtent5_creditChristinaKalff.jpg",
      "https://www.hkinteriors.com/wp-content/uploads/2018/11/bg-useful-links.jpg",
      "https://cdn.flipboard.com/dev_O/insideflipboard/outside/outside_cloud_blog_1200x750.jpg",
      "https://newsprogress.com/wp-content/uploads/2016/05/Dave-Cole-Award-427.jpg",
      "https://www.utiledesign.com/wp-content/uploads/2025/10/City-Hall-Lobby-424_low-1024x678.jpg",
      "https://substackcdn.com/image/fetch/f_auto,q_auto:good/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa7f4e29e-9704-41dc-8d8e-f9b17ad8eb15_1489x498.png",
      "https://www.uwmedicine.org/sites/stevie/files/styles/clinic_page_576_288/public/clinic-images/NJB%20HMC_11_0.jpeg",
      "https://www.outsideonline.com/wp-content/uploads/2025/05/GettyImages-103319910-scaled.jpg",
      "https://wexnermedical.osu.edu/-/media/images/wexnermedical/pages/patient-care/healthcare-services/mental-behavioral/outpatient-care/psychiactric-evaluation.jpg",
      "https://photo.upwards.com/public/photos/path/f30395.jpg",
      "https://texashighways.com/wp-content/uploads/2022/11/drive-atlas-ice-gardens-sculptures.jpg",
      "https://www.bellevuereporter.com/wp-content/uploads/2022/06/29337375_web1_Marymoor-Park-concert-series_1.jpg",
      "https://www.globalholdings-mgmt.com/wp-content/uploads/2022/09/washington-harbour-1-1024x682.jpg",
      "https://excursionmania.com/uploads/blog/ideas/420a5a39e12ea478c2f267b2cee4607f.jpg",
      "https://quietly-image-uploads.s3.amazonaws.com/image_7015_1280px_c975e1f0ed274103ad6d949df3292aaf.jpeg",
      "https://i.ebayimg.com/images/g/ouUAAOSwOEZkAU0f/s-l1200.jpg",
      "https://www.courant.com/wp-content/uploads/2023/06/rgd-13.jpg",
      "https://thumbs.dreamstime.com/b/pacific-coast-rocky-rugged-shoreline-misty-fog-2539664.jpg",
    ],
  },
];

export default function ReferencesPage() {
  return (
    <WeightedScrollProvider>
      <WeightedScrollLayer>
        <>
          {/* Hero: split layout */}
          <section className="pt-28 pb-16 min-h-[40vh] flex flex-col justify-end bg-port-navy relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-port-sky blur-3xl" />
              <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-port-ice blur-3xl" />
            </div>
            <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full">
              <ScrollRevealText direction="up">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                  References & Documentation
                </h1>
                <p className="mt-5 text-port-mist/90 text-lg sm:text-xl max-w-2xl">
                  How we approached the project and the technical decisions behind it.
                </p>
              </ScrollRevealText>
            </div>
          </section>

          {/* PDF embeds: 2-column grid */}
          <section className="py-12 lg:py-16 bg-white">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
              <ScrollRevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {referenceCards.map((card) => (
                  <ScrollRevealStaggerItem key={card.title}>
                    <div className="bg-port-frost/50 border border-port-mist/60 rounded-2xl overflow-hidden shadow-sm flex flex-col transition-all duration-300 hover:shadow-lg hover:border-port-sky/30 hover:-translate-y-1">
                      <div className="flex items-center gap-3 px-5 py-4 border-b border-port-mist/40 shrink-0">
                        <div className="w-9 h-9 bg-port-sky/20 rounded-lg flex items-center justify-center text-port-sky shrink-0 transition-all duration-200 hover:bg-port-sky/40 hover:scale-110">
                          <card.icon className="text-base" />
                        </div>
                        <div>
                          <h2 className="font-display text-sm font-semibold text-port-navy">{card.title}</h2>
                          <p className="text-port-slate text-xs leading-snug">{card.description}</p>
                        </div>
                      </div>
                      <iframe
                        src={card.pdfHref}
                        className="w-full"
                        style={{ height: "700px" }}
                        title={card.title}
                      />
                    </div>
                  </ScrollRevealStaggerItem>
                ))}
              </ScrollRevealStagger>
            </div>
          </section>

          {/* Narrative and Map: unified layout (same section size and style) */}
          <section className="py-14 lg:py-20 bg-port-frost/50 border-y border-port-mist/40">
            <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 space-y-14 lg:space-y-16">
              <ScrollRevealText direction="right">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-port-sky/20 flex items-center justify-center text-port-navy shrink-0">
                    <FaAnchor className="text-lg" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-port-navy mb-4">
                      Narrative and intent
                    </h2>
                    <div className="space-y-4 text-port-slate leading-relaxed text-base">
                      <p>
                        We wanted the site to feel like a real city portal, not a generic template. So we gave it a single, coherent place: a coastal city anchored in the Pacific Northwest. Every design choice (palette, imagery, copy, maps) serves that one narrative. The goal was to show that a fictional project can be built with the same rigor as a real one, so judges can evaluate structure, accessibility, and technical execution in a believable context.
                      </p>
                      <p>
                        We did not invent a city that could be anywhere. We invented one that clearly belongs somewhere, so the references, the map, and the technical stack all tell the same story.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollRevealText>

              <ScrollRevealText direction="left">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-port-sky/20 flex items-center justify-center text-port-navy shrink-0">
                    <FaMapMarkedAlt className="text-lg" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-port-navy mb-4">
                      Map and geography
                    </h2>
                    <p className="text-port-slate leading-relaxed text-base">
                      The Maps & Transport page uses a full-screen Google Maps embed. We set the default query to Port Angeles, WA, so the demo geography matches the narrative. A carousel of featured resources updates the map query on click so users see how “click a place, jump to it on the map” would work. Resource directory popups use a Google Static Map with the resource address and a Get Directions button. Resource data includes mapCoordinates for future per-pin mapping. We used Google (embed plus static) so the experience is familiar and we did not have to maintain custom tiles or geocoding.
                    </p>
                  </div>
                </div>
              </ScrollRevealText>
            </div>
          </section>

          <SDLCWheel />

          {/* Technical: flowcharts + specific details, unique layout */}
          <section id="tech-architecture" className="py-16 lg:py-24 bg-port-navy text-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
              <ScrollRevealText direction="up">
                <div className="flex items-center gap-3 mb-12">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <FaCode className="text-xl" />
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold">
                    Technical architecture
                  </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                  {/* Request flow diagram */}
                  <div className="space-y-6">
                    <h3 className="font-display text-lg font-semibold text-port-ice">
                      Request flow
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">Browser</span>
                      <FaLongArrowAltRight className="text-port-sky/80 shrink-0" />
                      <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">Next.js App Router</span>
                      <FaLongArrowAltRight className="text-port-sky/80 shrink-0" />
                      <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">Page or API route</span>
                      <FaLongArrowAltRight className="text-port-sky/80 shrink-0" />
                      <span className="arch-hover px-3 py-2 rounded-lg bg-port-sky/30 transition-transform duration-200 hover:scale-110 origin-center cursor-default">Firebase / Resend</span>
                    </div>
                    <p className="text-port-mist/80 text-sm leading-relaxed">
                      All routes live under app/. layout.tsx wraps the app with AuthProvider and renders Navbar and Footer. Pages are server or client components; API routes are in app/api/.
                    </p>
                  </div>

                  {/* Auth flow diagram */}
                  <div className="space-y-6">
                    <h3 className="font-display text-lg font-semibold text-port-ice">
                      Auth and user data
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">Sign in / Sign up / Google</span>
                        <FaArrowRight className="text-port-sky/80" />
                        <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">Firebase Auth</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">onAuthStateChanged</span>
                        <FaArrowRight className="text-port-sky/80" />
                        <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">user state in AuthContext</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">New user</span>
                        <FaArrowRight className="text-port-sky/80" />
                        <span className="arch-hover px-3 py-2 rounded-lg bg-port-sky/30 transition-transform duration-200 hover:scale-110 origin-center cursor-default">setDoc(users/{`{uid}`})</span>
                      </div>
                    </div>
                    <p className="text-port-mist/80 text-sm leading-relaxed">
                      Each user doc stores email, newsletterSubscribed, alerts.emergency, and preferences. Sign up sends email verification and writes the initial doc; Google sign-in creates the doc on first login if missing.
                    </p>
                  </div>
                </div>

                {/* API table */}
                <div className="mt-14">
                  <h3 className="font-display text-lg font-semibold text-port-ice mb-4">
                    API routes
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-white/10">
                    <table className="w-full text-sm text-left">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="py-3 px-4 text-port-ice font-medium">Route</th>
                          <th className="py-3 px-4 text-port-ice font-medium">Method</th>
                          <th className="py-3 px-4 text-port-ice font-medium">Body / params</th>
                          <th className="py-3 px-4 text-port-ice font-medium">Behavior</th>
                        </tr>
                      </thead>
                      <tbody className="text-port-mist/90">
                        <tr className="border-b border-white/5 transition-transform duration-200 hover:scale-[1.02] origin-left">
                          <td className="py-3 px-4 font-mono">/api/send-email</td>
                          <td className="py-3 px-4">POST</td>
                          <td className="py-3 px-4">email, subject, html</td>
                          <td className="py-3 px-4">Validates, then Resend.send(). Used by contact and broadcasts.</td>
                        </tr>
                        <tr className="border-b border-white/5 transition-transform duration-200 hover:scale-[1.02] origin-left">
                          <td className="py-3 px-4 font-mono">/api/spotlight-data</td>
                          <td className="py-3 px-4">GET</td>
                          <td className="py-3 px-4">none</td>
                          <td className="py-3 px-4">Returns spotlight entries array for home/calendar.</td>
                        </tr>
                        <tr className="border-b border-white/5 transition-transform duration-200 hover:scale-[1.02] origin-left">
                          <td className="py-3 px-4 font-mono">/api/admin/broadcast</td>
                          <td className="py-3 px-4">POST</td>
                          <td className="py-3 px-4">?secret=, campaignType, subject, html</td>
                          <td className="py-3 px-4">Checks secret. Queries Firestore (newsletterSubscribed or alerts.emergency), then sends one email per user via Resend.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Broadcast flow diagram */}
                <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="font-display text-lg font-semibold text-port-ice mb-4">
                    Broadcast flow
                  </h3>
                  <div className="flex flex-col sm:flex-row flex-wrap items-center gap-2 text-sm">
                    <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">POST /api/admin/broadcast?secret=</span>
                    <FaArrowRight className="text-port-sky/80 shrink-0" />
                    <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">Validate secret</span>
                    <FaArrowRight className="text-port-sky/80 shrink-0" />
                    <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">Firestore query (newsletter or alert)</span>
                    <FaArrowRight className="text-port-sky/80 shrink-0" />
                    <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">getDocs(users)</span>
                    <FaArrowRight className="text-port-sky/80 shrink-0" />
                    <span className="arch-hover px-3 py-2 rounded-lg bg-port-sky/30 transition-transform duration-200 hover:scale-110 origin-center cursor-default">Resend per user email</span>
                  </div>
                </div>

                {/* Stack icons: single row, no extra copy */}
                <div className="mt-14 pt-10 border-t border-white/10">
                  <p className="text-port-mist/70 text-sm mb-4">Stack</p>
                  <div className="flex flex-wrap gap-4 items-center">
                    <span className="arch-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 transition-transform duration-200 hover:scale-110 origin-center cursor-default">
                      <SiNextdotjs className="text-xl" /> Next.js 16
                    </span>
                    <span className="arch-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 transition-transform duration-200 hover:scale-110 origin-center cursor-default">
                      <SiReact className="text-xl" /> React 18
                    </span>
                    <span className="arch-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 transition-transform duration-200 hover:scale-110 origin-center cursor-default">
                      <SiTypescript className="text-xl" /> TypeScript
                    </span>
                    <span className="arch-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 transition-transform duration-200 hover:scale-110 origin-center cursor-default">
                      <SiTailwindcss className="text-xl" /> Tailwind
                    </span>
                    <span className="arch-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 transition-transform duration-200 hover:scale-110 origin-center cursor-default">
                      <SiFirebase className="text-xl" /> Firebase
                    </span>
                    <span className="arch-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 transition-transform duration-200 hover:scale-110 origin-center cursor-default">
                      <SiGoogle className="text-xl" /> Google Maps
                    </span>
                    <span className="arch-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 transition-transform duration-200 hover:scale-110 origin-center cursor-default">
                      <FaEnvelope className="text-lg" /> Resend
                    </span>
                    <span className="arch-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 transition-transform duration-200 hover:scale-110 origin-center cursor-default">
                      <SiVercel className="text-xl" /> Vercel
                    </span>
                    <span className="arch-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 transition-transform duration-200 hover:scale-110 origin-center cursor-default">
                      <SiNodedotjs className="text-xl" /> Node
                    </span>
                  </div>
                </div>
              </ScrollRevealText>
            </div>
          </section>

          {/* Design */}
          <section id="design" className="py-16 md:py-24 bg-white border-t border-port-mist/40">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 space-y-14">
              <ScrollRevealText direction="up">
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-port-navy">Design</h2>
              </ScrollRevealText>

              {/* Inspiration */}
              <ScrollRevealText direction="up">
                <div className="space-y-6">
                  <h3 className="font-display text-xl font-semibold text-port-navy">Inspiration</h3>
                  <p className="text-port-slate text-sm max-w-2xl">
                    Government and civic websites that influenced the visual direction and UX of Port Laken.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                    {[
                      {
                        href: "https://www.seattle.gov/",
                        label: "Seattle, WA",
                        domain: "seattle.gov",
                        images: [
                          "https://uploads.visitseattle.org/2023/05/09125333/RachaelJones_Skyline-Banner_2.jpg",
                        ],
                      },
                      {
                        href: "https://www.kirklandwa.gov/Home", label: "Kirkland, WA", domain: "kirklandwa.gov", images: ["https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/41b572f9-d32c-4939-ab78-1c2aad587828",
                        ]
                      },
                      {
                        href: "https://www.dubai.ae/", label: "Dubai", domain: "dubai.ae", images: ["https://images.pexels.com/photos/5614592/pexels-photo-5614592.jpeg"
                        ]
                      },
                      {
                        href: "https://lacity.gov/", label: "Los Angeles, CA", domain: "lacity.gov", images: ["https://images.pexels.com/photos/4744697/pexels-photo-4744697.jpeg"
                        ]
                      },
                      {
                        href: "https://www.myswitzerland.com/en-us", label: "Switzerland Tourism", domain: "myswitzerland.com", images: ["https://images.pexels.com/photos/1659433/pexels-photo-1659433.jpeg"]
                      },
                    ].map((site) => (
                      <a
                        key={site.href}
                        href={site.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col rounded-2xl border border-port-mist/50 overflow-hidden shadow-sm hover:shadow-md hover:border-port-sky/30 transition-all duration-300 bg-port-frost/40"
                      >
                        <div className="aspect-video w-full overflow-hidden bg-port-mist/20 relative">
                          {site.images && site.images.length > 0 ? (
                            <Image
                              src={site.images[0]}
                              alt={site.label}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 640px) 100vw, 20vw"
                              unoptimized
                            />
                          ) : (
                            <iframe
                              src={site.href}
                              title={site.label}
                              className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none border-0"
                              loading="lazy"
                              sandbox="allow-same-origin"
                            />
                          )}
                        </div>
                        <div className="px-4 py-3">
                          <p className="text-sm font-semibold text-port-navy group-hover:text-port-sky transition-colors">{site.label}</p>
                          <p className="text-xs text-port-slate/60 font-mono mt-0.5">{site.domain}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollRevealText>

              {/* Design Philosophy */}
              <ScrollRevealText direction="up">
                <div className="space-y-10">
                  <h3 className="font-display text-xl font-semibold text-port-navy">Design Philosophy</h3>

                  {/* Bento: Fonts + Colors */}
                  <ScrollRevealStagger className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-auto">

                    {/* Color palette — tall left column */}
                    <ScrollRevealStaggerItem className="row-span-2">
                      <div className="rounded-2xl bg-port-navy p-5 flex flex-col gap-3 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <p className="text-port-ice text-xs font-semibold uppercase tracking-widest mb-1">Palette</p>
                        {[
                          { name: "Navy", hex: "#1e3a5f", bg: "bg-[#1e3a5f]", border: true },
                          { name: "Slate", hex: "#2d4a6f", bg: "bg-[#2d4a6f]", border: false },
                          { name: "Steel", hex: "#4a6d8c", bg: "bg-[#4a6d8c]", border: false },
                          { name: "Sky", hex: "#6b9bc3", bg: "bg-[#6b9bc3]", border: false },
                          { name: "Ice", hex: "#a8c5db", bg: "bg-[#a8c5db]", border: false },
                          { name: "Mist", hex: "#d4e4ed", bg: "bg-[#d4e4ed]", border: false },
                          { name: "Frost", hex: "#eef4f8", bg: "bg-[#eef4f8]", border: false },
                        ].map((c) => (
                          <div key={c.name} className="flex items-center gap-3 group/swatch cursor-default">
                            <div className={`w-8 h-8 rounded-lg shrink-0 ${c.bg} ${c.border ? "border border-white/20" : ""} transition-transform duration-200 group-hover/swatch:scale-125`} />
                            <div>
                              <p className="text-white text-xs font-medium leading-none">{c.name}</p>
                              <p className="text-port-ice/60 text-[10px] font-mono mt-0.5">{c.hex}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollRevealStaggerItem>

                    {/* Display font */}
                    <ScrollRevealStaggerItem className="col-span-2">
                      <div className="rounded-2xl bg-port-frost/60 border border-port-mist/50 p-5 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-md hover:border-port-sky/30 hover:-translate-y-1">
                        <p className="text-port-slate/60 text-xs uppercase tracking-widest">Display / Headings</p>
                        <p className="font-display text-5xl text-port-navy mt-2 leading-none">Aa</p>
                        <div className="mt-3">
                          <p className="font-display text-base font-semibold text-port-navy">Playfair Display</p>
                          <p className="text-port-slate/60 text-xs mt-0.5">Serif, hero titles and section headers</p>
                        </div>
                      </div>
                    </ScrollRevealStaggerItem>

                    {/* Body font */}
                    <ScrollRevealStaggerItem>
                      <div className="rounded-2xl bg-port-frost/60 border border-port-mist/50 p-5 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-md hover:border-port-sky/30 hover:-translate-y-1">
                        <p className="text-port-slate/60 text-xs uppercase tracking-widest">Body / UI</p>
                        <p className="font-nunito text-5xl text-port-navy mt-2 leading-none">Aa</p>
                        <div className="mt-3">
                          <p className="font-nunito text-base font-semibold text-port-navy">Nunito</p>
                          <p className="text-port-slate/60 text-xs mt-0.5">Sans-serif, body copy, nav, and buttons</p>
                        </div>
                      </div>
                    </ScrollRevealStaggerItem>

                    {/* Type scale sample */}
                    <ScrollRevealStaggerItem className="col-span-2">
                      <div className="rounded-2xl bg-white border border-port-mist/50 p-5 space-y-2 h-full transition-all duration-300 hover:shadow-md hover:border-port-sky/30 hover:-translate-y-1">
                        <p className="text-port-slate/60 text-xs uppercase tracking-widest mb-3">Type scale</p>
                        <p className="font-display text-2xl font-bold text-port-navy leading-tight">Port Laken City Portal</p>
                        <p className="font-display text-lg text-port-navy/80">Community <em>First</em></p>
                        <p className="font-nunito text-sm text-port-slate leading-relaxed">Civic information, clearly presented. Nunito keeps the UI friendly and legible at every size.</p>
                        <p className="font-nunito text-xs text-port-slate/60 uppercase tracking-wider">Label / Caption text</p>
                      </div>
                    </ScrollRevealStaggerItem>

                    {/* Accent color */}
                    <ScrollRevealStaggerItem>
                      <div className="rounded-2xl bg-port-sky p-5 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-lg hover:brightness-110 hover:-translate-y-1 cursor-default">
                        <p className="text-white/70 text-xs uppercase tracking-widest">Accent</p>
                        <p className="text-white font-display text-3xl font-bold mt-2">#6b9bc3</p>
                        <p className="text-white/70 text-xs mt-1">port-sky, highlights, icons, and links</p>
                      </div>
                    </ScrollRevealStaggerItem>
                  </ScrollRevealStagger>

                  {/* Interactive demos */}
                  <div className="space-y-6">
                    <p className="text-port-slate/60 text-xs uppercase tracking-widest">Components & Motion</p>

                    <ScrollRevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                      {/* Buttons */}
                      <ScrollRevealStaggerItem>
                        <div className="rounded-2xl bg-port-frost/60 border border-port-mist/50 p-6 space-y-4 transition-all duration-300 hover:shadow-md hover:border-port-sky/30 hover:-translate-y-1">
                          <p className="text-port-slate/60 text-xs uppercase tracking-widest">Buttons</p>
                          <div className="flex flex-wrap gap-3">
                            <button className="px-5 py-2 rounded-full bg-port-navy text-white text-sm font-nunito font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:bg-port-slate active:scale-95">
                              Primary
                            </button>
                            <button className="px-5 py-2 rounded-full border-2 border-port-navy text-port-navy text-sm font-nunito font-semibold transition-all duration-200 hover:bg-port-navy hover:text-white hover:-translate-y-0.5 active:scale-95">
                              Secondary
                            </button>
                            <button className="px-5 py-2 rounded-full bg-port-sky text-white text-sm font-nunito font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:bg-port-steel active:scale-95">
                              Inverted
                            </button>
                            <button className="px-5 py-2 rounded-full border border-port-mist text-port-slate text-sm font-nunito transition-all duration-200 hover:border-port-sky hover:text-port-sky active:scale-95">
                              Outlined
                            </button>
                          </div>
                        </div>
                      </ScrollRevealStaggerItem>

                      {/* Card hover */}
                      <ScrollRevealStaggerItem>
                        <div className="rounded-2xl bg-port-frost/60 border border-port-mist/50 p-6 space-y-4 transition-all duration-300 hover:shadow-md hover:border-port-sky/30 hover:-translate-y-1">
                          <p className="text-port-slate/60 text-xs uppercase tracking-widest">Card Hover</p>
                          <div className="group bg-white rounded-xl border border-port-mist/60 p-4 shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-port-sky/30">
                            <div className="w-8 h-8 rounded-lg bg-port-sky/20 flex items-center justify-center mb-3">
                              <FaAnchor className="text-port-sky text-sm" />
                            </div>
                            <p className="font-display text-sm font-semibold text-port-navy">Hover me</p>
                            <p className="text-port-slate/70 text-xs mt-1">Cards lift on hover with shadow deepening</p>
                          </div>
                        </div>
                      </ScrollRevealStaggerItem>

                      {/* Navbar underline */}
                      <ScrollRevealStaggerItem>
                        <div className="rounded-2xl bg-port-frost/60 border border-port-mist/50 p-6 space-y-4 transition-all duration-300 hover:shadow-md hover:border-port-sky/30 hover:-translate-y-1">
                          <p className="text-port-slate/60 text-xs uppercase tracking-widest">Nav Links</p>
                          <div className="flex flex-col gap-3">
                            {["Home", "Departments", "Community"].map((link) => (
                              <span key={link} className="relative inline-block w-fit font-nunito text-sm text-port-navy cursor-pointer group">
                                {link}
                                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-port-sky transition-all duration-300 group-hover:w-full rounded-full" />
                              </span>
                            ))}
                          </div>
                        </div>
                      </ScrollRevealStaggerItem>

                      {/* Fade in up animation */}
                      <ScrollRevealStaggerItem>
                        <div className="rounded-2xl bg-port-frost/60 border border-port-mist/50 p-6 space-y-4 transition-all duration-300 hover:shadow-md hover:border-port-sky/30 hover:-translate-y-1">
                          <p className="text-port-slate/60 text-xs uppercase tracking-widest">Scroll Reveal</p>
                          <p className="text-port-slate text-xs leading-relaxed">Elements enter with <code className="bg-port-mist/60 px-1 rounded text-port-navy">fadeInUp</code> at 0.8s ease-out. Staggered children animate in sequence via <code className="bg-port-mist/60 px-1 rounded text-port-navy">ScrollRevealStagger</code>.</p>
                          <div className="space-y-2">
                            {[1, 2, 3].map((i) => (
                              <div
                                key={i}
                                className="h-2 rounded-full bg-port-sky/30 animate-pulse"
                                style={{ width: `${90 - i * 15}%`, animationDelay: `${i * 0.15}s` }}
                              />
                            ))}
                          </div>
                        </div>
                      </ScrollRevealStaggerItem>

                      {/* Frosted glass navbar */}
                      <ScrollRevealStaggerItem>
                        <div className="rounded-2xl bg-gradient-to-br from-port-sky/30 to-port-navy/20 border border-port-mist/50 p-6 space-y-4 transition-all duration-300 hover:shadow-md hover:border-port-sky/40 hover:-translate-y-1">
                          <p className="text-port-slate/60 text-xs uppercase tracking-widest">Frosted Glass</p>
                          <div className="rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 px-4 py-3 flex items-center gap-3 shadow-sm">
                            <div className="w-5 h-5 rounded bg-port-navy/80" />
                            <span className="font-nunito text-xs text-port-navy font-semibold">Port Laken</span>
                            <div className="ml-auto flex gap-2">
                              {["Home", "Dept", "News"].map(l => (
                                <span key={l} className="font-nunito text-[10px] text-port-navy/70">{l}</span>
                              ))}
                            </div>
                          </div>
                          <p className="text-port-slate text-xs">Navbar uses <code className="bg-port-mist/60 px-1 rounded text-port-navy">backdrop-blur-3xl</code> + semi-transparent white</p>
                        </div>
                      </ScrollRevealStaggerItem>

                      {/* Spotlight card */}
                      <ScrollRevealStaggerItem>
                        <div className="rounded-2xl bg-port-frost/60 border border-port-mist/50 p-6 space-y-4 transition-all duration-300 hover:shadow-md hover:border-port-sky/30 hover:-translate-y-1">
                          <p className="text-port-slate/60 text-xs uppercase tracking-widest">Spotlight Grid</p>
                          <div className="grid grid-cols-2 gap-2">
                            {["Parks", "Fire Dept", "Finance", "Police"].map((item) => (
                              <div
                                key={item}
                                className="group/card rounded-xl bg-white border border-port-mist/50 p-3 text-center cursor-pointer transition-all duration-300 hover:border-port-sky/40 hover:shadow-md peer"
                              >
                                <p className="font-nunito text-xs text-port-navy font-semibold transition-opacity duration-300 group-hover/card:text-port-sky">{item}</p>
                              </div>
                            ))}
                          </div>
                          <p className="text-port-slate text-xs">Siblings dim when a card is hovered</p>
                        </div>
                      </ScrollRevealStaggerItem>

                    </ScrollRevealStagger>
                  </div>

                  {/* Short explanation */}
                  <ScrollRevealText direction="up">
                    <div className="rounded-2xl bg-port-navy p-7 w-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                      <p className="font-display text-lg font-semibold text-white mb-3">Why it works together</p>
                      <p className="font-nunito text-port-mist/80 text-sm leading-relaxed">
                        Playfair Display gives Port Laken editorial weight, the kind of gravitas you'd expect from a real civic institution. Nunito keeps everything readable and warm at the UI level. The coastal blue ramp (navy to frost) creates natural depth without needing shadows everywhere. Rounded corners and subtle lift animations signal interactivity without being loud. The result is a site that feels trustworthy, approachable, and distinctly Pacific Northwest.
                      </p>
                    </div>
                  </ScrollRevealText>

                </div>
              </ScrollRevealText>
            </div>
          </section>

          {/* Disclaimer + Visual Inspiration (unchanged content, no repetition) */}
          <section className="py-16 md:py-24 bg-port-frost/40 border-t border-port-mist/40">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 space-y-16 md:space-y-20">
              <ScrollRevealText direction="up">
                <div className="bg-white rounded-2xl border border-port-mist/40 shadow-sm p-8 md:p-10 lg:p-12">
                  <div className="space-y-8 max-w-4xl">
                    <h3 className="font-display text-3xl sm:text-4xl font-semibold text-port-navy">
                      Disclaimer & Context
                    </h3>

                    <div className="space-y-6 text-port-slate text-base sm:text-lg leading-relaxed">
                      <p>
                        This website and all associated content is a fictional project created solely for educational, design, and portfolio demonstration purposes.
                      </p>

                      <p>
                        Port Laken is not a real location. It is a completely invented coastal city.
                      </p>

                      <p>
                        The overall aesthetic, atmosphere, and visual language are inspired by real communities in Washington State, including:
                      </p>

                      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 pl-6 sm:pl-8 list-disc marker:text-port-navy">
                        <li>Port Angeles</li>
                        <li>Bellingham</li>
                        <li>Bremerton</li>
                        <li>Aberdeen</li>
                        <li>Sequim</li>
                        <li>Anacortes</li>
                      </ul>

                      <p>
                        Imagery and descriptions reference common characteristics of Pacific Northwest coastal regions: misty evergreen forests, rocky and rugged shorelines, active working harbors, small-town maritime culture, and contemporary community elements.
                      </p>

                      <p className="text-sm text-port-slate/80 pt-4 border-t border-port-mist/30">
                        No real-world people, businesses, organizations, events, or specific locations are depicted, referenced, or intended to be represented. All content is original or used within the scope of fair-use/educational purposes.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollRevealText>

              <ScrollRevealText direction="up">
                <div className="space-y-6">
                  <h4 className="font-display text-2xl sm:text-3xl font-semibold text-port-navy">
                    Visual Comunity Inspiration
                  </h4>
                  <p className="text-port-slate text-sm max-w-2xl">
                    Reference imagery from Washington State coastal communities. Each card links to the source.
                  </p>

                  <ScrollRevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    <ScrollRevealStaggerItem>
                    <a
                      href="https://olympicpeninsula.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative rounded-2xl overflow-hidden border border-port-mist/30 shadow-sm hover:shadow-lg transition-all duration-300 bg-white block hover:-translate-y-1 hover:border-port-sky/30"
                    >
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <Image
                          src="https://portofpa.com/wp-content/uploads/2022/03/harboroverview.jpg"
                          alt="Port Angeles harbor with mountains in background"
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm font-medium text-port-navy">Working harbor & mountain backdrop</p>
                        <p className="text-xs text-port-slate/70 mt-1">Inspired by Port Angeles</p>
                        <p className="text-xs text-port-sky mt-2 font-medium">View source</p>
                      </div>
                    </a>
                    </ScrollRevealStaggerItem>

                    <ScrollRevealStaggerItem>
                    <a
                      href="https://unsplash.com/s/photos/bellingham-waterfront"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative rounded-2xl overflow-hidden border border-port-mist/30 shadow-sm hover:shadow-lg transition-all duration-300 bg-white block hover:-translate-y-1 hover:border-port-sky/30"
                    >
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <Image
                          src="https://bellingham.objects.liquidweb.services/photos/1164-oyster-dome-whatcom-county-1200x800.jpg"
                          alt="Calm waterfront and coastal scenery inspired by Bellingham"
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm font-medium text-port-navy">Calm waterfront & islands</p>
                        <p className="text-xs text-port-slate/70 mt-1">Inspired by Bellingham</p>
                        <p className="text-xs text-port-sky mt-2 font-medium">View source</p>
                      </div>
                    </a>
                    </ScrollRevealStaggerItem>

                    <ScrollRevealStaggerItem>
                    <a
                      href="https://unsplash.com/s/photos/pacific-northwest-coast"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative rounded-2xl overflow-hidden border border-port-mist/30 shadow-sm hover:shadow-lg transition-all duration-300 bg-white block hover:-translate-y-1 hover:border-port-sky/30"
                    >
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <Image
                          src="https://thumbs.dreamstime.com/b/pacific-coast-rocky-rugged-shoreline-misty-fog-2539664.jpg"
                          alt="Misty shoreline and coastal atmosphere inspired by Sequim area"
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm font-medium text-port-navy">Rugged spit & misty shore</p>
                        <p className="text-xs text-port-slate/70 mt-1">Inspired by Sequim area</p>
                        <p className="text-xs text-port-sky mt-2 font-medium">View source</p>
                      </div>
                    </a>
                    </ScrollRevealStaggerItem>

                    <ScrollRevealStaggerItem>
                    <a
                      href="https://unsplash.com/s/photos/bridge-water-coast"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative rounded-2xl overflow-hidden border border-port-mist/30 shadow-sm hover:shadow-lg transition-all duration-300 bg-white block hover:-translate-y-1 hover:border-port-sky/30"
                    >
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <Image
                          src="https://whidbeycamanoislands.com/wp-content/uploads/2016/04/DNS9435.jpg"
                          alt="Dramatic coastal bridges and channels inspired by Anacortes region"
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm font-medium text-port-navy">Dramatic coastal bridges & channels</p>
                        <p className="text-xs text-port-slate/70 mt-1">Inspired by Anacortes region</p>
                        <p className="text-xs text-port-sky mt-2 font-medium">View source</p>
                      </div>
                    </a>
                    </ScrollRevealStaggerItem>
                  </ScrollRevealStagger>
                </div>
              </ScrollRevealText>

              {/* Image Sources Table */}
              <div className="space-y-6">
                <h4 className="font-display text-2xl sm:text-3xl font-semibold text-port-navy">
                  Image Sources
                </h4>
                <p className="text-port-slate text-sm max-w-2xl">
                  All images used across the site, organized by source. Used for educational/TSA competition purposes.
                </p>
                <div className="space-y-8">
                  {imageSources.map((group) => (
                    <div key={group.group}>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-display text-sm font-semibold text-port-navy">{group.group}</span>
                        {group.note && (
                          <span className="text-xs text-port-slate/70 bg-port-frost border border-port-mist/50 px-2 py-0.5 rounded-full">
                            {group.note}
                          </span>
                        )}
                      </div>
                      <div className="rounded-xl border border-port-mist/50 overflow-hidden">
                        <table className="w-full text-sm text-left">
                          <thead>
                            <tr className="bg-port-frost border-b border-port-mist/50">
                              <th className="py-2 px-4 text-port-navy font-medium w-8">#</th>
                              <th className="py-2 px-4 text-port-navy font-medium">URL</th>
                            </tr>
                          </thead>
                          <tbody>
                            {group.urls.map((url, i) => (
                              <tr key={i} className="border-b border-port-mist/30 last:border-0 hover:bg-port-frost/60 transition-colors">
                                <td className="py-2.5 px-4 text-port-slate/50 text-xs">{i + 1}</td>
                                <td className="py-2.5 px-4">
                                  <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-port-sky hover:text-port-sky/70 transition-colors text-xs font-mono break-all"
                                  >
                                    <FaExternalLinkAlt className="shrink-0 text-[10px]" />
                                    {url}
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      </WeightedScrollLayer>
    </WeightedScrollProvider>
  );
}
