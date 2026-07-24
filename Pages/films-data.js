/* Shared film data — loaded by Pages/film.html and Pages/films/*.html
   All image/file paths are root-relative so they work from any subdirectory. */
(function () {
  window.FILMS = [
    {
      slug: 'death-of-a-glacier',
      detailPage: 'films/death-of-a-glacier.html',
      title: 'Death of a Glacier',
      year: 'Expected fall 2026',
      type: 'Documentary',
      client: 'Whispering River Media',
      role: 'Director · Producer · Cinematographer · Editor',
      image: '/images/film/doag-bolivia/still011.jpg',
      imagePosition: 'center',
      poster: '/images/film/doag-bolivia-epk-cover-1.png',
      epk: '/files/death-of-a-glacier-epk.pdf',
      coverVideo: 'Trailer',
      gallery: [
        '/images/film/doag-bolivia/still013.jpg',
        '/images/film/doag-bolivia/still003.jpg',
        '/images/film/doag-bolivia/still008.jpg',
        '/images/film/doag-bolivia/still007.jpg',
        '/images/film/doag-bolivia/still004.jpg',
        '/images/film/doag-bolivia/still014.jpg',
        '/images/film/doag-bolivia/still006.jpg',
        '/images/film/doag-bolivia/still005.jpg',
        '/images/film/doag-bolivia/still009.jpg',
        '/images/film/doag-bolivia/still010.jpg',
        '/images/film/doag-bolivia/still011.jpg',
        '/images/film/doag-bolivia/still012.jpg',
        '/images/film/doag-bolivia/still015.jpg'
      ],
      credits: [
        { label: 'Director · Producer · DP · Editor', name: 'Ethan C. Parrish, Ph.D.' },
        { label: 'Producers', name: 'Whispering River Media · Andrew Jones · Shaun Marcott' },
        { label: 'Subjects', name: 'Andrew Jones · Álvaro Soruco · Yasmeen Orellana-Salazar · Matías Romero · Domitila Alaña Llusco · Adrián Vargas Quispe' },
        { label: 'Research Support', name: 'UW–Madison Proglacial Research Lab', url: 'https://proglacial.geoscience.wisc.edu/' }
      ]
    },
    {
      slug: 'whats-in-a-name',
      detailPage: 'films/whats-in-a-name.html',
      title: "What's in a Name?",
      year: 2024,
      type: 'Documentary',
      client: 'Whispering River Media',
      role: 'Director · Producer · Cinematographer · Editor',
      tagline: 'Decolonizing Paleontology',
      watchUrl: 'https://youtu.be/yxPXtBFZWEo',
      embedUrl: 'https://www.youtube.com/embed/yxPXtBFZWEo',
      poster: '/images/film/wian-poster.jpg',
      image: '/images/film/wian-cover.jpg',
      imagePosition: 'center',
      epigraph: {
        text: "For more than 250 years, new taxa—be they fossil or still living animals—have traditionally been given a formal binomial name in Latin or Greek (e.g., dogs = Canis familiaris). However, very few scientific names use aboriginal place names, honor Indigenous peoples, or use Native languages, despite discoveries being made on the land they call home. This tradition perpetuates the impact colonial history has on scientific practices.",
        source: 'Dr. Dave Lovelace · 2022 Outcrop'
      },
      videos: [
        {
          label: 'Official Trailer',
          embedUrl: 'https://www.youtube.com/embed/pEsWbRrJWSQ',
          watchUrl: 'https://youtu.be/pEsWbRrJWSQ',
          desc: "What's in a Name? highlights the development of a partnership between paleontologist Dr. Dave Lovelace and the Wind River Reservation community that led to the naming of three new paleontological taxa via multi-generational collaboration between tribal Elders and students. It is a journey that calls for a change in well-entrenched colonial practices throughout the sciences, and specifically to the process of how taxa are commonly named within the science of paleontology."
        },
        {
          label: "Behind the Scenes — Director's Thoughts & Insights",
          embedUrl: 'https://www.youtube.com/embed/3dccswiVvdI',
          watchUrl: 'https://youtu.be/3dccswiVvdI',
          desc: "In this behind-the-scenes video, I share the story of how What's in a Name? came to life. From its earliest spark as an idea to the unexpected ways it grew in scope and meaning, I reflect on my personal connection to the film's central theme, the significance of the work featured in it, and the motivations that shaped its direction. I also offer a few thoughts on what I hope audiences take away from the project, offering a candid look at the film through my lens as both a geoscientist and the director."
        },
        {
          label: 'Wisconsin Life | Decolonizing Science',
          source: 'PBS Wisconsin',
          embedUrl: 'https://www.youtube.com/embed/fdWqD5KE-4Q',
          watchUrl: 'https://youtu.be/fdWqD5KE-4Q',
          desc: "In the high desert of Wyoming, two UW-Madison scientists, Ethan Parrish and Dave Lovelace, Ph.D, discuss their collaboration to decolonize their scientific disciplines in order to promote a more inclusive future for the next generation."
        }
      ],
      gallery: [
        '/images/film/wian-production/wian-prod-01.jpg',
        '/images/film/wian-production/wian-prod-02.jpg',
        '/images/film/wian-production/wian-prod-03.jpg',
        '/images/film/wian-production/wian-prod-04.jpg',
        '/images/film/wian-production/wian-prod-05.jpg',
        '/images/film/wian-production/wian-prod-06.jpg',
        '/images/film/wian-production/wian-prod-07.jpg',
        '/images/film/wian-production/wian-prod-08.jpg',
        '/images/film/wian-production/wian-prod-09.jpg'
      ],
      credits: [
        { label: 'Director · DP · Editor', name: 'Ethan C. Parrish' },
        { label: 'Composer', name: 'Joshua DeMoss' },
        { label: 'Producers', name: 'Whispering River Media · UW–Madison Geology Museum · Bravebird Productions' },
        { label: 'Camera Operators', name: 'Ethan C. Parrish · Alex Miranda · Mike Gorski' },
        { label: 'Narrator', name: 'George Abyeta' },
        { label: 'Aerial Imagery', name: 'Ethan C. Parrish · Mike Gorski' },
        { label: 'Assistant Editor', name: 'Matilde Acosta' }
      ],
      statementByline: 'Ethan C. Parrish · Director / DP / Editor',
      statement: [
        "I've taken an atypical path to my budding career as a filmmaker and my first documentary film \"What's in a Name?\". By training, I'm a geologist who specialized during my Ph.D. in reading the sedimentary record to assess how climate change affected a terrestrial hydrologic system fifty-five million years ago. But film and photography have forever been a passion of mine, so much so that as part of my Ph.D. I applied my passion for filmmaking to my love of teaching and geoscience to study how incorporating art into introductory geoscience curricula inspires students. While pursuing my Ph.D., I had the opportunity to work as a camera operator for Bravebird Productions on several films, including the independently produced feature-length narrative \"Trace the Line\" and the award-winning documentary short \"Decolonizing Dinner\". In addition to \"What's in a Name?\", which was shot and edited during my Ph.D., I also began production on a project about glacial decline in the western hemisphere shortly before graduation in January of this year (2024). The stories that compel me are those at the intersections of Earth science and humanity. Our relationship to this planet is so fundamentally important to our existence, yet so easily under-appreciated and ignored. My passion is to tell stories that illustrate the beauty and importance of that relationship.",
        "As part of my Ph.D. research, I discovered an ancient river that existed in southwestern Wyoming fifty-five million years ago. Needing to name it, I decided I wanted to honor the ancestral keepers of the land and thus reached out to the Eastern Shoshone Heritage Center (ESHC) for help naming the river. After working with Robyn Rokfur at the ESHC to find a name that honored the land and Eastern Shoshone culture, I ran into significant pushback from collaborators in my effort to publish the name. It was around that time that I was approached by Dr. Dave Lovelace at the University of Wisconsin Geology Museum about documenting his project that led to this film. As it turned out, he was encountering similar reticence by the scientific community to honor the Indigenous heritage of the communities whose ancestral land he worked on as he worked with them to name new taxa. Moreover, he was going about collaborating with the local communities and incorporating them in a far better way than I had by simply emailing the local heritage center. His passion, selflessness, and commitment to doing his science more inclusively and ethically—often to the detriment of his \"scientific productivity\" as he seeks to dismantle more than a hundred years of colonialistic practices—inspired me to undertake this film.",
        "Western science is profoundly colonialistic. Subsumed in its practice is the inherent assumption that, due to the \"scientific process\", there is no higher mode of understanding or relating to the world. This assumption has been a leading justifier for hundreds of years of colonialistic practices around the world. As an Earth scientist, I see a profoundly tragic irony in this. Considering that the basis for much of our research is careful observation of the world we inhabit, it flies in the face of logic to routinely disregard hundreds of years of careful observation of the natural world by indigenous cultures. The principal theme of this film, as discussed via the naming of new paleontological discoveries, is that of recognizing the importance of Indigenous knowledge and history, and how honoring these things benefits Western science as much as it does Indigenous cultures. Inherent in this theme is the recognition that empowering Indigenous youth is vital to the future of their culture as well as to healthier relationships between Western science and Indigenous knowledge. As such, the film is centered on a field trip where youth from the Wind River Reservation are introduced to fossils near their home in Wyoming. My hope is that viewers of this film might begin to appreciate the need to redefine how we approach science in the ancestral lands of Indigenous groups and recognize the importance of investing time and energy into elevating their voices, perspectives, and wisdom—wisdom built on thousands of years of lived experience.",
        "The original intent for \"What's in a Name?\" was a short educational piece documenting Dr. Dave Lovelace's work to be shown at the University of Wisconsin Geology Museum. It was predicated on a collaborative field trip between the Museum and Fort Washakie School on the Wind River Reservation. During the field trip with Fort Washakie School, I met Reba Teran, an elder of the Eastern Shoshone Tribe. She opened the day with a blessing and asked the students to be good listeners during the field trip. Health and mobility challenges prevented her from joining us as the trip entailed a substantial hike. Returning to the trailhead, however, we found Reba there drumming and praying. The drumming soon stopped as the chatter of 40+ middle schoolers saturated the space. After thank yous and goodbyes, the school bus rumbled off and Reba followed it out. It was during that trip that I saw the potential for a more substantial film than a short educational piece. However, for it to have a shot at getting there, I knew I would need to incorporate the voices and perspectives of community members. Unfortunately, I had no idea how best to build those bridges.",
        "About ten minutes later, as my team was packing up, we heard a car coming up the road. As it pulled up next to us, Reba rolled down the window and said, \"The Great Spirit told me to turn around and ask if you all would like to have lunch with me\". Lunch led to conversation, conversation led to her interest in being interviewed, and her interview led to the backbone of \"What's in a Name?\". It took another year and a half and two more trips to Wyoming to wrap principal photography before moving to post-production. The entire production process was complicated by the fact that I was concurrently working on my Ph.D. and that my production and dissertation timelines were so unfortunately aligned that the first private showing of the film was scheduled for the same day as my public dissertation defense.",
        "Despite the film being founded on the field trip, its backbone seeks to contrast the personal stories of Dr. Dave Lovelace and Eastern Shoshone elder Reba Teran as it leads to their convergence as part of the naming of two newly discovered taxa. Both characters grew up in and developed a love for Wyoming during their childhood. Yet, while Dave's childhood was one of privilege and the joy of exploring the land, Reba's was that of cultural homicide as she, like hundreds of thousands of Indigenous children in the United States since colonial expansion, was sent to a boarding school and prevented from speaking her native language.",
        "One of Dave's goals in his collaboration with the Wind River Reservation community is that of reciprocity—the idea that he shouldn't be gaining anything (even scientifically) without the community profiting equally. Moreover, his goal from the beginning was that of sustained collaboration with the community. I wanted to apply the same mentality to the filming of \"What's in a Name?\". To do so I collaborated with Indigenous filmmaker Alejandro Miranda-Cruz on the project, in an effort to address any blind spots I might have as a white filmmaker. Additionally, should the film garner any profit, 50% of the proceeds will go to Fort Washakie School on the Wind River Reservation.",
        "As Dave mentions in the film, the work being documented in \"What's in a Name?\" is not ground-breaking. It's certainly not original to collaborate with Indigenous groups, but it's also not the status quo… and it should be. I would love for this film to be another voice in the fight for Indigenous civil rights, especially within scientific communities that engage with and depend on the natural world as a basis for their science."
      ]
    },
    {
      slug: 'working-with-nature',
      title: 'Working with Nature',
      year: 2024,
      type: 'Contracted',
      client: 'North Forty',
      role: 'Production Team',
      watchUrl: 'https://www.youtube.com/watch?v=xQ6M9fcZ1Go',
      image: 'https://img.youtube.com/vi/xQ6M9fcZ1Go/maxresdefault.jpg'
    },
    {
      slug: 'death-of-a-glacier-iceland',
      detailPage: 'films/death-of-a-glacier-iceland.html',
      title: 'Death of a Glacier - Iceland',
      year: 2023,
      type: 'Documentary',
      client: 'Whispering River Media',
      role: 'Director · Cinematographer · Editor',
      watchUrl: 'https://youtu.be/o20ekRl65Xc',
      embedUrl: 'https://www.youtube.com/embed/o20ekRl65Xc',
      image: '/images/film/doag-iceland-cover.jpg',
      imagePosition: '75% center',
      gallery: [
        '/images/film/doag-production/doag-prod-01.jpg',
        '/images/film/doag-production/doag-prod-02.jpg',
        '/images/film/doag-production/doag-prod-03.jpg',
        '/images/film/doag-production/doag-prod-04.jpg',
        '/images/film/doag-production/doag-prod-05.jpg',
        '/images/film/doag-production/doag-prod-06.jpg',
        '/images/film/doag-production/doag-prod-07.jpg',
        '/images/film/doag-production/doag-prod-08.jpg',
        '/images/film/doag-production/doag-prod-09.jpg',
        '/images/film/doag-production/doag-prod-10.jpg',
        '/images/film/doag-production/doag-prod-11.jpg',
        '/images/film/doag-production/doag-prod-12.jpg'
      ],
      credits: [
        { label: 'Director · Cinematographer · Editor', name: 'Ethan C. Parrish' },
        { label: 'Producers', name: 'Shaun Marcott · Ethan C. Parrish · Andrew Jones' },
        { label: 'Client', name: 'University of Wisconsin – Madison Proglacial Research Lab', url: 'https://proglacial.geoscience.wisc.edu/' }
      ]
    },
    {
      slug: 'celebrating-life',
      title: 'Celebrating Life',
      year: 2023,
      type: 'Contracted',
      client: 'Bravebird Productions',
      role: '2nd Unit Cinematography',
      watchUrl: 'https://vimeo.com/1040964610',
      image: '/images/film/celebrating-life-cover.jpg'
    },
    {
      slug: 'decolonizing-dinner',
      title: 'Decolonizing Dinner',
      year: 2023,
      type: 'Contracted',
      client: 'Bravebird Productions',
      role: '2nd Unit Cinematography',
      watchUrl: 'https://vimeo.com/679605275/1b2d49300e',
      image: '/images/film/decolonizing-dinner-cover.jpg'
    },
    {
      slug: 'decolonizing-science',
      title: 'Decolonizing Science',
      year: 2022,
      type: 'Contracted',
      client: 'Bravebird Productions',
      role: 'Director · Cinematographer',
      watchUrl: 'https://www.youtube.com/watch?v=fdWqD5KE-4Q',
      image: 'https://img.youtube.com/vi/fdWqD5KE-4Q/maxresdefault.jpg'
    },
    {
      slug: 'love-like-a-river',
      title: 'Love Like a River',
      year: 2021,
      type: 'Documentary',
      client: 'Whispering River Media',
      role: 'Director · Producer · Cinematographer · Editor',
      watchUrl: 'https://www.youtube.com/watch?v=6P1xxB0A470',
      image: '/images/film/llar-cover.jpg'
    }
  ];

  window.WRM_DESC = {
    "What's in a Name?":            "On the Wind River Reservation in central Wyoming, a paleontologist works alongside Eastern Shoshone Elders and students to name newly discovered fossils — a multi-generational collaboration that asks Western science to honor the Indigenous land and language it has long overlooked.",
    "Death of a Glacier":           "High in the Bolivian Andes, the scientists who study the disappearing glaciers, alongside the community whose water depends on their meltwater, confront what is being lost.",
    "Death of a Glacier - Iceland": "At the edge of a retreating glacier, two Earth scientists and a concert violinist attempt what data alone cannot — inviting you to grieve what ice remembers.",
    "Love Like a River":            "Whispers from a river: A poetic exploration of what rivers have to teach about love."
  };

  window.DETAIL_DESCS = {
    "What's in a Name?":            "\"What's in a Name?\" highlights the development of a partnership between paleontologist Dr. Dave Lovelace and the Wind River Reservation community that led to the naming of three new paleontological taxa via multi-generational collaboration between tribal Elders and students. It is a journey that calls for a change in well-entrenched colonial practices throughout the sciences, and specifically to the process of how taxa are commonly named within the science of paleontology.",
    "Death of a Glacier":           "In the Bolivian Andes, the glaciers are vanishing — and with them, the water that sustains the communities below. Death of a Glacier follows a team of climate scientists and the residents of the Zongo Valley as they confront the retreat of ice that has crowned these mountains for millennia. For the families living at the foot of Huayna Potosí, the glacier is drinking water, electricity, livelihood, and memory. For the scientists, it is a record — one that now shows the ice has shrunk past its smallest size in nearly twelve thousand years. Told largely in Spanish by the people closest to the loss, the film moves from why glaciers matter, to what the science reveals, to the harder question of what remains possible. It refuses both denial and despair, insisting that what we still do counts.",
    "Death of a Glacier - Iceland": "Death of a Glacier - Iceland originated as a collaboration between two Earth scientists (Dr. Ethan C. Parrish and Dr. Andrew Jones) and a concert violinist (Sahada Buckley). The goal of the project was twofold: first, the film was created as means of processing and lamenting the inescapably concerning data about our warming planet that geoscientists deal with every day. Second, in contrast to the endless firehose of climate change data unrelentingly sprayed at the public, this film offers an alternative way to hear and hopefully feel the tragic reality of climate change.",
    "Love Like a River":            "Created for a \"Liturgy of the Land\" event held at Upper House in Madison, WI, in the spring of 2023, Love Like a River offers a poetic exploration of the wisdom rivers have to offer on \"love\"."
  };

  window.FILM_PALETTES = [
    ['44403b','c4bfb8'], ['1c1a17','857f78'], ['857f78','f2ede6'],
    ['7d8c7a','f2ede6'], ['44403b','7d8c7a'], ['c4bfb8','44403b'],
    ['1c1a17','c4bfb8'], ['857f78','1c1a17']
  ];
})();
