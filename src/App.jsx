import React, { useState } from 'react';

// Main App Component
const App = () => {
    // Hardcoded initial classmates data
    // You can edit this array to add your actual classmates, messages, and songs!
    const initialClassmates = [
        {
            id: 'classmate1', //done
            name: 'Denlee Rui Egaran',
            message: 'The G.O.A.T. my brotha, my homie. Hi Eggs, you\’ve been one of the best homies I\’ve had throughout highschool. I hope that your journey in MSU will push you towards success. Here\’s a song for you. ',
            songTitle: 'Huwag Kang Matakot',
            songArtist: 'Parokya ni Edgar',
            songReason: 'I know your tendency to doubt your moves especially if about sa life mo, so bro, wag kang matakot',
            songLink: 'https://open.spotify.com/track/1ZUKSCTqNX5mfkns4jHXyb?si=dc64f92544614ead', // Example Spotify link
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751768859/484954906_1395293405217887_7855903505147743240_n_bswjaq.jpg', // Placeholder image
        },
        {
            id: 'classmate2', //done
            name: 'Paul Mariano',
            message: 'Partner in crime(literal)Poyyyy HAHAHAHAH, wassup bruu?? I\’m thankful that I met you because we\’ve bonded thru every possible shit pati illegal AHAHAHAH joke lang. I hope that your path will eventually make you succeed in life. Here\’s a song for you.',
            songTitle: 'Gitara',
            songArtist: 'Parokya ni Edgar',
            songReason: 'Pirme nimo gina play sa gitara HAHAHAHAAH',
            songLink: 'https://open.spotify.com/track/7nbIGbDitZIYoMrMsXunAu?si=5786f64980a145af',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773192/482349907_1344343276902380_6483799211210881877_n_frgqus.jpg', // Placeholder image
        },
        {
            id: 'classmate3',//done
            name: 'Andrie Tabilo',
            message: '1 / 2 Longest homie. Hi drieee, it\’s been 13 years na na cms ta, wa paka nagsawa nako?? HAHAHAHA joke lang. I did not expect the BSED path pero I hope na maging successful ka ana bro. Here\’s a song for you',
            songTitle: 'Libre Sampak',
            songArtist: 'Nopetsallowed',
            songReason: 'Trip lang nako ni driee AHAHAHAHA',
            songLink: 'https://open.spotify.com/track/15SEltkOQMRgW4XJfliD1v?si=f34638a036534e3c',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773191/476411355_982254423824473_1335799107765071230_n_witqgb.jpg', // Placeholder image
        },
        {
            id: 'classmate4', //done
            name: 'Kent Ryan Tirados',
            message: '2 / 2 Longest Homie. Hi kentt!! pinakaulihi ni graduate, pinakauna nag klase HWHAHAHAHAHA, unta okay paka bordzz. I\'ve witnessed your greatness and all I can say is thast you\'ve grown bro. Goodluck sa BSED nimo na path bro.',
            songTitle: 'Stitches',
            songArtist: 'Shawn Mendez',
            songReason: 'La lang, fave man nimo si Shawn AHAHHAHAHA',
            songLink: 'https://open.spotify.com/track/5jsw9uXEGuKyJzs0boZ1bT?si=0374247590494c47',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773192/475576826_1281445086403241_6025519076584896389_n_piubaw.jpg', // Placeholder image
        },
        {
            id: 'classmate5', //done
            name: 'Eulyne Abe',
            message: 'One goated of a Woman. Hi Eull!! I know that you\’re a brilliant person with a bright future too. We\’ve been classmates since Kinder2 and you\’ve proven yourself to be a capable woman. Goodluck sa college journey yul! This song is for you.',
            songTitle: 'Long Live',
            songArtist: 'Taylor Swift',
            songReason: 'I chose this song because it talks about transitioning from teenager to adulthood and I can see that sa iyo, finally becoming a young adult.',
            songLink: 'https://open.spotify.com/track/4ewAfHYpDTzpW1GKO44CVP?si=e06543e7c5754847',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773191/473700684_1260099911765993_8612405257157029885_n_fpy7hd.jpg', // Placeholder image
        },
        {
            id: 'classmate6', //done
            name: 'Xyra Nicole Abueva',
            message: 'Xyra, I\'m really happy on what you\'ve become. You\'re one of the kindest people I know and I hope you keep it up until college and futher in your life. It\’s been a fun ride with you. I know you\’ll be a successful person in the future. Goodluck sa college journey Xyra! This song is for you.',
            songTitle: 'Bawat Daan',
            songArtist: 'Ebe Dancel',
            songReason: 'My own understanding of this song, is baout finding a guiding light towards your path and you, Xyra, will definitely need someone like that in the future as you can sometimes be swayed from your path.',
            songLink: 'https://open.spotify.com/track/1hJtJvPX9knMysNDQw0HDJ?si=be3307b174c1409d',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773191/Screenshot_2025-07-06_094224_nozwwo.png', // Placeholder image
        },
        {
            id: 'classmate7', //done
            name: 'Cris Divine Cajucom',
            message: 'Hi Cris! Back out gid ka sa IT?? HAHAHAHAHA joke lang. We\'re not really close and it might be weird na may ganto akong message pero you\'re one of the most influential people I know. I keep saying this pero you\'ve become the embodiment of Woomanhood. No lies. Completely change my perspective on the world especially politics. Don\'t worry, I will cherish the scolding I\'ve recieved from you AHHAHAAHHAH. You\'re a good friend, Cris. I know you\’ll be a successful person in the future. Goodluck sa college journey Cris! This song is for you.',
            songTitle: 'Ako Naman Muna',
            songArtist: 'Angela Ken',
            songReason: 'I picked this song because I feel like it resonates with you, correct me if I\'m wrong. I remember the things I heard about you and your personal life, and i feel like this song is, i hope, something you can resonate with hehehehe',
            songLink: 'https://open.spotify.com/track/35yw6wTQcItHtyrbCAQV9L?si=21a480da2eea45db',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773191/514276904_1991087895028429_7257185136934787231_n_xsiknp.jpg', // Placeholder image
        },
        {
            id: 'classmate8', //done
            name: 'Shamilla Discaya',
            message: 'Hi Sham!! Obviously, we haven\'t interacted in a while pero it\'s nice seeing you grow and excel in life. May college life treat you well baii. I know you\’ll be a successful person in the future. Goodluck sa college journey Sham! This song is for you.',
            songTitle: 'Every Summertime',
            songArtist: 'NIKI',
            songReason: 'I\'ve listened to this song a lot of times, and when I was thinking of your song, this popped out and it matches you vibe hehe.',
            songLink: 'https://open.spotify.com/track/68HocO7fx9z0MgDU0ZPHro?si=982783c6d5034a01',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773174/484233167_663634362893730_4161797278270982074_n_qrfkoa.jpg', // Placeholder image
        },
        {
            id: 'classmate9', //done
            name: 'April Rose Layuan',
            message: 'Hi pril!! From the very first time I met you, I was always impressed with the way you portray ideas and your thoughts. Also, an incredible singer. Little did I know, you were struggling to fight your own battles, but you come out on top like a boss HAHAHAHHA. Keep it up pril. Goodluck sa College life mo. This song is for you.',
            songTitle: 'Unwritten',
            songArtist: ' Natasha Bedingfield',
            songReason: 'The reason is in the song itself pril. I am sure that you\'ll do great in your path towards your future. Don\'t let anyone tell you otherwise. After all, you are the author of your own story, and the rest is still yours to write.',
            songLink: 'https://open.spotify.com/track/3U5JVgI2x4rDyHGObzJfNf?si=5fba6f90453d422e',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773188/489927011_1320908195875869_2360973856058842535_n_g7vwbp.jpg', // Placeholder image
        },
        {
            id: 'classmate10', //done
            name: 'Ayessa Jane Gamas',
            message: 'Hi Yess!! You\'ve been a great friend and classmate to me. You\'re what I consider, a very joyful person that can bring smiles to a group or class, in this case. I\'m positive that you are going to do great things in life especially in college. Goodluck sa college journey Gams!!! This song is for you.',
            songTitle: 'A Sky Full of Stars',
            songArtist: 'Coldplay',
            songReason: 'According sa brief explanation about this song, This song uses the metaphor of a sky full of stars to represent a beloved person who brings light, joy, and hope into the singer\'s life, especially during dark times and it immediately made me think of you. Though it may not be 100% accurate, I hope you like it hehe.',
            songLink: 'https://open.spotify.com/track/0FDzzruyVECATHXKHFs9eJ?si=e3c168e3dd5c4a53',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773191/495016272_1031405429136845_6532499654145662528_n_hrmnq1.jpg', // Placeholder image
        },
        {
            id: 'classmate11', //done
            name: 'Jecca Faeldonea',
            message: 'Hi Jec!! There\'s nothing more I can say other than you ahve proven to be a capable leader among your peers. I hope you keep it up in your college life and for the future days to come! Missed those times where ikaw ang akuang kasabay mubaktas pauli dati HAHAHAHAHAHA, good ol days. Goodluck sa college journey Jecca! This song is for you.',
            songTitle: 'When She Cries',
            songArtist: 'Restless Heart',
            songReason: 'The song is self explanatory. I can see that you are struggling with your life as well as the rest of us. Don\'t worry Jec, I know you, you can do it!!',
            songLink: 'https://open.spotify.com/track/6XO3pbrZP9JBJclHt0JiY0?si=eaa1fef0e3384c6a',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773181/477679131_1294825871796771_2487127287563547461_n_ffjpjf.jpg', // Placeholder image
        },
        {
            id: 'classmate12', //done
            name: 'Beaunnah Angel Malicay',
            message: 'Hi Beaun!! We haven\'t really interacted much after JHS but the memories stick to me, especially during RB pag G9. We were a powerhouse of a group with you at its core as our scriptwriter and reporter. You\'re an exceptional person, capable of surpassing the expectations of everyone. Idk if you can see it too but if you don\'t, I\'m here to tell you that you\'ve grown to be a powerful person with a bright future. Goodluck sa college journey Beaun! This song is for you.',
            songTitle: 'Life Goes On',
            songArtist: 'BTS',
            songReason: 'I have no idea on what to song to put here honestly but I do remember that you like BTS. I did exstensive research and came up with this song choice. Even in the face of this new normality, our life goes on and imparts a message of healing. I guess you understand why I chose this song HAHAHAHAHAHHA',
            songLink: 'https://open.spotify.com/track/5FVbvttjEvQ8r2BgUcJgNg?si=8e67b186685f4622',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773186/476425600_122256887900066967_7438601527929990769_n_adozyz.jpg', // Placeholder image
        },
        {
            id: 'classmate13', //done
            name: 'Bea Sophene Maurera',
            message: 'Hi Beyy!! You\'ve grown to be a wonderful woman with high dreams that I\'m sure you\'re capable of reaching. I remember, seatmates ta nila Angel pag G5 and sige tag katawa tatlo especially during ArPan time HAHAHAHAHHA. Pero, in all seriousness, goodluck sa imo journey Beyy!! Goodluck sa college journey! This song is for you.',
            songTitle: 'Paradise',
            songArtist: 'Coldplay',
            songReason: 'This song fits you Beyy. You\'re a girl dreaming of greater things for herself. Dreaming of paradise for you and your family. From taga hulam ug lapis nimo, this is for you.',
            songLink: 'https://open.spotify.com/track/6nek1Nin9q48AVZcWs9e9D?si=aa646e0e0a2a4d48',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773185/485387503_1616515289196283_2917101850552082870_n_ktn4ld.jpg', // Placeholder image
        },
        {
            id: 'classmate14', //done
            name: 'Ayeza Chloe Majani',
            message: 'Hi Yezzz!! The greatest artist/designer/illustrator I\'ve known. We aren\'t that close talaga but the core memory I had with you is during yung NSPC 2024, nitawag gid para lang maka crack sa Adobe Indesign HAHAHAHAHAHA. Look at you, you\'re going to be successful one day, I believe that. Goodluck sa college journey Ayeza! This song is for you.',
            songTitle: '24',
            songArtist: 'NIKI',
            songReason: 'Technically, you\'re not 24 yet yezz, pero the premise is the same AHHAAHHAHA. You\'re growing and with you, you carry your dreams and aspirations, that\'s why I chose this song. Hope ya like it!',
            songLink: 'https://open.spotify.com/track/1dODOcUBb5SrXflh3L4zjE?si=6536144f36aa4ab0',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773186/475700221_502332816239152_2279617003085794458_n_ms5un4.jpg', // Placeholder image
        },
        {
            id: 'classmate15', //done
            name: 'Elzenith Grace Depositario',
            message: 'Hi zen! I know that what happened between us and our former group was unpleasant but I keep on reminiscing the good times we\'ve spent. You\'ve always been the literal ball of sunshine wherever you go. Sometimes, I keep thinking of just putting everything that happened in the past and just go back to what once was. Maybe it\'ll happen soon? Who knows? I miss your company Zen. Goodluck sa college journey Zen! This song is for you.',
            songTitle: 'Multo',
            songArtist: 'Cup of Joe',
            songReason: 'Multo is about reminiscing about a partner who left you but it can also translate to a friend. Though I didn\'t literally lose you, we just parted ways. There\'s nothing more to say other than, I hope life treats you well, Zen. Best of wishes to you.',
            songLink: 'https://open.spotify.com/track/5tlb0AxuzsMWL2GtEppXGX?si=4e12c8af91874ce4',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773183/482981175_3920770648196968_2554157698020123470_n_mvcrna.jpg', // Placeholder image
        },
        {
            id: 'classmate16', //done
            name: 'Jamaica Lorejo',
            message: 'Hi Jamsss!! We got along togther during TVB days pag g10 and since then, you\'ve acted as my guide ever since. Murag di ko kalihok if wala ka HAHAHAHAH. Ngl, I miss working with you sa TVB team alongside Trisha and Mary. Para akong ligaw na bata nung G12 HAHAHAHAHA. I know you had your reasons din, and I understand hehehe. Anyways, I hope college will treat you well, I know for a fact that you\'ll be a successful person someday. Goodluck sa college journey Jam! This song is for you.',
            songTitle: 'Nothing',
            songArtist: 'Bruno Major',
            songReason: 'I know that this song is specifically a love song, but the message is similar to how we worked together dati sa Tv. I have to say, it\'s very different to have you around as my guiding light sa team, parang empty na wala ka sa team AHHAHAHHAHA. Hope you like this song baiii.',
            songLink: 'https://open.spotify.com/track/1lORkxEMmsCZqhoxcmk3A3?si=423f3e58420145e4',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773183/789bc252-3dea-467d-b441-f1786b3d324b_h8wkud.jpg', // Placeholder image
        },
        {
            id: 'classmate17', //done
            name: 'Janelle Geagonia',
            message: 'Hi Jan!! The literal angel of the class AHAHAHHAHA. Obviously, we aren\'t that close noh pero you\'ve showed me that kindness in your level can be impactful towards people. Ibang-iba talaga ang kabaitan mo HAHAHAHAHAHA. Goodluck sa college journey Janelle! This song is for you.',
            songTitle: 'Leaves',
            songArtist: 'Ben&Ben',
            songReason: 'Being the kindest person sa class natin, I think this\'ll suit you Jan. Idk how correct I am, but I think beneath that kind persona lies a woman fighting her own struggles too. If I\'m right, I hope everything will be alright hehe.',
            songLink: 'https://open.spotify.com/track/6wdCelHrPh7UfliNjwRTUv?si=e7b80891eee941a9',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773185/490525261_122127015680653134_581134571539431277_n_tiwtto.jpg', // Placeholder image
        },
        {
            id: 'classmate18', //done
            name: 'Jessica Leandra Paculio',
            message: 'Hey Jess! We\'re about to go our separate ways na. I just wanna say that even though we are not together anymore, I still want to see you grow, achieve your dreams, find happiness, pero now, as a good friend of yours. We both know that this isn\'t what were planning but I still want to see you succeed in life. I pray that we both find our peace. You\'ll always have a special place in my heart. Goodluck sa college life, Jess. This song is for you.',
            songTitle: 'Waltz of Four Left Feet',
            songArtist: 'Shirebound and Busking',
            songReason: 'Honestly, I can choose a lot of songs but instead, I chose this one. This is my own interpretation but the lyrics talks about living your own life, without this person but still wants to be a part of their life. I\'m pretty sure that the song and lyrics are self-explanatory. I guess hindi ko naman ikamamatay kung hindi ko mahawakan ang iyong kamay. Goodluck sa life, this is for you.',
            songLink: 'https://open.spotify.com/track/29eiVZ3R6iJcXB01dOAl6H?si=e53e00970d6e4309',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752081488/c3dc6df7-f993-4b38-a454-1c940dbb42ac_qr38ue.jpg', // Placeholder image
        },
        {
            id: 'classmate19', //done
            name: 'Jewel Gwynette Delfino',
            message: 'Hi Jew!! Every since elem days, ikaw ang naging isa sa mga close friends nako. You\'ve always been kind to me and I appreciate that so much. I hope you keep that enthusiastic persona in your college life and the future days to come!! Goodluck sa college journey Jewel! This song is for you.',
            songTitle: 'Diamonds',
            songArtist: 'Rihanna',
            songReason: 'I know that you are a capable person, doing things that can impress masses if you show them. I hope this song can resonate with you jew hehe.',
            songLink: 'https://open.spotify.com/track/6O20JhBJPePEkBdrB5sqRx?si=8134005ab6394e6d',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773180/482000518_1165448968266016_6139817164049281234_n_bdeknt.jpg', // Placeholder image
        },
        {
            id: 'classmate20', //done
            name: 'Julie Ann Belonio',
            message: 'Hi Jul!! The best Copyreading buddy I know HAHAHAHHA. One of the best friends I\'ve had. Both you and Abii helped me take off in JHS tbh HAHAHAHHAHA. I remember going jogging wiht you on a random day para lang mag rant sa akua about you problems dati ka S... di na nato i mention AHAHAHHAHA. You\'re doing great jul, keep it up and I\'ll see you on the other side! Goodluck sa college journey Julie! This song is for you.',
            songTitle: 'Get You',
            songArtist: 'Daniel Caesar',
            songReason: 'This song is about finding profound love and feeling immense gratitude for a partner who brings joy and a sense of completeness. I might sound weird pero I know that you have a history dating guys who are not so good, and I can see that it can affect you in every aspect. When I heard this song, I thought  that this could resonate with you. Yun lang hehehehe.',
            songLink: 'https://open.spotify.com/track/0ePfa6zS6fU11o6y1G1g9d?si=4e4d4e4d4e4d4e4d',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773180/480406490_1421025298869180_1013043811909968339_n_gmyejr.jpg', // Placeholder image
        },
        {
            id: 'classmate21', //done
            name: 'Kate Paculba',
            message: 'Hi Kate!! One of my buddies during the pandemic and even way before pa HAHAHAHAH. Quiz Bee buddies pud HAHAHAHHA. I remember na way back 2021 or 2022, sige kag laag sa balay, maka Valorant lang, and I\'d cook something random like Adobo. Those were good ol days HAHHAHAH. I believe that you\'ll achieve great things in life baii. Goodluck sa college journey Kate! This song is for you.',
            songTitle: 'Clocks',
            songArtist: 'Coldplay',
            songReason: 'I think this song fits you Kate. Nothing else can compare the friendship we once had AHAHAHAHHAA. Bit OA dyan na part pero sige langss. I miss oyu bai. This is for you.',
            songLink: 'https://open.spotify.com/track/0BCPKOYdS2jbQ8iyB56Zns?si=ff25e8d5a0954a08',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773175/492003278_1742177156718026_7571534476202404896_n_ipospp.jpg', // Placeholder image
        },
        {
            id: 'classmate22', //done
            name: 'Angel Lyes Salazar',
            message: 'Hi Gel!! Y\'know, after many years of being classmates and friends, you\'ve been one of the kindest there is. During the time period where the entire class was mad at me for what happened then, alam mo kung ano to HAHAHAHHA, I was, of course, very troubled but my day gets better whenever we bump into each other and you freet me with a simple HI JAY! or even a simple smile. It gave me joy knowing that there is still someone who is kind enough to greet me still HAHAHAHAHAHA. I hope you keep spreading that kindness you give to people despite having your own battles as well.  Goodluck sa college journey Gel!!! This song is for you.',
            songTitle: 'Silakbo',
            songArtist: 'Cup of Joe',
            songReason: 'Maybe you\'re wondering why this song is the one I chose. The lyrics encourage embracing one\'s emotions and not holding back, using the metaphor of a caged heart crying out and the weight of turmoil as driving forces for action. I know that you have your own battles, I can see them from your posts and all. It\'s better to let your frustrations out rather than bottle them up, and I hope you are doing that one. So yan, here\'s your song hehe.',
            songLink: 'https://open.spotify.com/track/0ePfa6zS6fU11o6y1G1g9d?si=4e4d4e4d4e4d4e4d',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773175/495328643_1662700758454683_8279747951604063248_n_q7dqqk.jpg', // Placeholder image
        },
        {
            id: 'classmate23', //done
            name: 'Mary Jeanneil Susmeña',
            message: 'Hi Marr!! My kapwa Joewah. I see that you\'re doing well in life. I miss the time where you bring life to the room or group, especially during our TVB days. I can see the dedication in everything you do, and that\'s really admirable. I also miss the times where you keep reassuring me during stressful TVB practices and competitions and helping me calm down, I relally appreciate that. I hope that college will treat you great. See you in the other side! Goodluck sa college journey Mary! This song is for you.',
            songTitle: 'Lahat Ng Bukas',
            songArtist: 'Cup of Joe',
            songReason: 'I know that within that very lively personality, lies a person battling personal problems. Though it isn\'t my business, I do care about your well-being, even if we rarely interact. I feel this song can resonate with you well, Mar.',
            songLink: 'https://open.spotify.com/track/3s39TR3Iarc2013cuvDGQ7?si=1745d5b1b60744a9',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773175/484124139_2064206544078912_7514657754532759117_n_jjiewl.jpg', // Placeholder image
        },
        {
            id: 'classmate24', //done
            name: 'Trisha Lee Noquillo',
            message: 'Hi Trish!! The best broadcaster I\'ve met, no exaggeration AHHAHAHAHAHA. I miss the times where we bonded with the team sa TV, and can occasionally make us all laugh HAHAHAHAH. Never lose that undying passion towards the things you are passionate about. Goodluck sa college journey Trish! This song is for you.',
            songTitle: 'Adventure of a Lifetime',
            songArtist: 'Coldplay',
            songReason: 'Life is an adventure, you know that. It may not be the entire premise of this song pero I heard this song, and it reminded me of you. Your pursuit of greatness is unmatched bai HAHAHAHHAHA. will definitely miss you bro!',
            songLink: 'https://open.spotify.com/track/0ePfa6zS6fU11o6y1G1g9d?si=4e4d4e4d4e4d4e4d',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773175/Screenshot_2025-07-06_102152_wtwojn.png', // Placeholder image
        },
        {
            id: 'classmate25', //done
            name: 'Trixie Orge',
            message: 'Trixie, One of the role models I look up to, especially sa CTP time. You have this great sense of responsibility whenever it calls you. You\'ll manage to survive college trix, I believe in you. Everyone does. Goodluck sa college journey Trixie! This song is for you.',
            songTitle: 'Moves Like Jagger',
            songArtist: 'Maroon 5',
            songReason: 'It may be a weird song choice, but I legit related it to your upbeat personality HAHAHAHAHA, it matches well with the song. I hope you keep that joy up and going until adulthood trix!',
            songLink: 'https://open.spotify.com/track/3TahdwXB4gJRWVAI00Ejqa?si=c85002c048c445da',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773174/474953629_1325098605287845_2381695244064018926_n_vp5ciu.jpg', // Placeholder image
        },
        {
            id: 'classmate26', // done
            name: 'Lady Yoraisa Amabella Pagaduan',
            message: 'Hello Yor!! Being my longest friend, considered as my sister at this point HAHAHAHAHA. Thank you for being with me through thick and thin. I can\'t imagine surviving life without you, for reals HAHAHAHAHA. We made a pact, I should be invited to your wedding and funeral, bantay ka lang HAHAHAHAHAH. Thank you for being the best unofficial sister of mine. This song is for you.',
            songTitle: 'Kahel na Langit',
            songArtist: 'Maki',
            songReason: 'I meant this song platonically. This song is pretty straightforward. You\'ve always been a shoulder I can cry on, no matter how bad the situation went. You\'re the person I run to with my problems, which is the essence of this song. You\'re a special person to me so you deserve this special song as well.',
            songLink: 'https://open.spotify.com/track/0ePfa6zS6fU11o6y1G1g9d?si=4e4d4e4d4e4d4e4d',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751940035/516233784_1806954770173411_6807222095374744161_n_ppxupr.jpg', // Placeholder image
        },
        {
            id: 'classmate27', // Changed ID to ensure uniqueness // done
            name: 'Zya Jayver Lima',
            message: 'Hi Zey! I have to be honest, you\'re one of the people I am grateful to have because whenever I have done something wrong, you don\'t hesitate to point it out and I am forever grateful for that. You\'re a good friend and I hope that I am as good of a friend to you hehe. Goodluck sa college journey Zey!! This song is for you.',
            songTitle: 'Sleep Tonight',
            songArtist: 'December Avenue',
            songReason: 'This is a weird song choice because it is a song for your partner but try to think of it as a friendship song. Whenever you feel like giving up or something is letting you down, you can come to me and I will do my best to help you Sleep Tonight.',
            songLink: 'https://open.spotify.com/track/0KzB2OAG7oYEPOsNcXf6T6?si=989a411160984610',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751773175/502521884_18061852940585267_3315322321766316143_n_dj1nak.jpg', // Placeholder image
        },
        {
            id: 'classmate28', // Changed ID to ensure uniqueness //done
            name: 'Abegail Idnay',
            message: 'Hi Abii!! You\'re an amazing friend that I have spent my entire JHS life with. I remember we created a dance together just for funsies. We called it "The Chicken Manok" HAHAHAHAHAHA. I know that we may not hang out or talk like we used to but I always treasure you and your presence always. I miss you baii, and I hope that college life will treat you well. Goodluck sa College, Abs. This song is for you.',
            songTitle: 'With A Smile',
            songArtist: 'Eraserheads',
            songReason: 'I picked this song because, number 1, you were the person who introduced me to Eraserheads and the entire OPM genre. Number 2, it talks about taking risks and not worrying with every step you take. I find it resonating with you because sometimes, you can get a bit hesitant with your steps, so this song is a reminder to not worry and to just do your best in life. Remember, always do it with a smile.',
            songLink: 'https://open.spotify.com/track/1NopgVCMVhCKIm64tF7auX?si=31d981febfb74cbf',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751777188/Screenshot_2025-07-06_124603_if5owq.png', // Placeholder image
        },
        {
            id: 'classmate29', // Changed ID to ensure uniqueness //done
            name: 'Ma\'am Rea',
            message: 'Hi Ma\'am Rea!! The best adviser I had AHHAHAHAHA. You are really dedicated to help your babies when they need something. Will forever be grateful sa support na gina give mo samin, especially me during DCT interview time HAHAHAHAHAHAH. Will forever treasure your teachings sa amin lahat! Love you ma\'am Rea, this song is for you!',
            songTitle: 'My Heart Will Go On ',
            songArtist: 'Celine Dion',
            songReason: 'Big Celine Dion fan man ka maam, alam namin yan, so I picked this song for you po hehe. Miss you po Ma\'am.',
            songLink: 'https://open.spotify.com/track/33LC84JgLvK2KuW43MfaNq?si=e3fb1b3e113d493b',
            picture: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752220342/516097214_30635745362690609_7641417287021376425_n_gpbz73.jpg', // Placeholder image
        },
    ];

    // Images for the new Gallery Page
    const galleryImages = [
       { id: 'gal1', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1751764890/357070966_299139499195106_4093967020498687689_n_qvpzna.jpg', alt: 'Classmate group photo 1' },
        { id: 'gal2', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215441/244706112_3012556005653658_8698370047358473006_n_n3qs2g.jpg', alt: 'Classmate group photo 2' },
        { id: 'gal3', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215442/245131685_851419939068992_3701658600761487602_n_bex58n.jpg', alt: 'Classmate group photo 3' },
        { id: 'gal4', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215437/498653178_29931292443135908_294071373297611533_n_f3wfqj.jpg', alt: 'Classmate group photo 4' },
        { id: 'gal5', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215438/244094153_585980252825242_5483373924131894091_n_ekdgri.jpg', alt: 'Classmate group photo 5' },
        { id: 'gal6', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215434/498546819_29931289383136214_1569115687586695634_n_z1wjm1.jpg', alt: 'Classmate group photo 6' },
        { id: 'gal7', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215434/241668281_4638393962858298_7481453318360489959_n_qcyhsx.jpg', alt: 'Classmate group photo 7' },
        { id: 'gal8', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215428/354709984_1392829371315618_4067543323604485440_n_rdmwaj.jpg', alt: 'Classmate group photo 8' },
        { id: 'gal9', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215422/420002585_350926344367841_3461449095069164573_n_hzl5id.jpg', alt: 'Classmate group photo 9' },
        { id: 'gal10', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215426/119057616_306054600695653_5475408524441385942_n_grmpza.jpg', alt: 'Classmate group photo 10' },
        { id: 'gal11', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215424/497877640_29921148190817000_3521769548731602168_n_vjugjb.jpg', alt: 'Classmate group photo 11' },
        { id: 'gal12', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215415/356547071_1166442048079735_251260462763650511_n_eetpar.jpg', alt: 'Classmate group photo 12' },
        { id: 'gal13', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215415/95080938_2450368418587430_4526875476781694976_n_tbadm6.jpg', alt: 'Classmate group photo 13' },
        { id: 'gal14', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215410/505036687_30227214860210330_3586779910924505294_n_oniuvp.jpg', alt: 'Classmate group photo 14' },
        { id: 'gal15', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215409/342969461_230397459681352_6198146313550611264_n_nsaqv0.jpg', alt: 'Classmate group photo 15' },
        { id: 'gal16', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215407/344294911_1222824405036223_7380848838913383839_n_ehflob.jpg', alt: 'Classmate group photo 16' },
        { id: 'gal17', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215408/345923049_210137288461247_5655888302358659540_n_vraudt.jpg', alt: 'Classmate group photo 17' },
        { id: 'gal18', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215411/502480441_30090547933877024_3871567281139337903_n_lhqolf.jpg', alt: 'Classmate group photo 18' },
        { id: 'gal19', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215411/348358200_262897722890931_2753383038961920863_n_c4zwrn.jpg', alt: 'Classmate group photo 19' },
        { id: 'gal20', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215412/354490039_994563051682368_3806913835360216152_n_tfndtf.jpg', alt: 'Classmate group photo 20' },
        { id: 'gal21', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215412/82072285_2609720225972955_5699167451397226496_n_to3okj.jpg', alt: 'Classmate group photo 21' },
        { id: 'gal22', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215413/82688296_642853119587166_5904917112387796992_n_gn1ptd.jpg', alt: 'Classmate group photo 22' },
        { id: 'gal23', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215416/358807757_6420838817997336_3544309548192801862_n_zj3gtf.jpg', alt: 'Classmate group photo 23' },
        { id: 'gal24', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215417/95453693_532683580727125_8511876739670999040_n_v8ihka.jpg', alt: 'Classmate group photo 24' },
        { id: 'gal25', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215419/358740404_673801551451485_4395559673407007854_n_jibbmh.jpg', alt: 'Classmate group photo 25' },
        { id: 'gal26', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215422/381975014_1333446127270512_4292422832276821262_n_kc2q07.jpg', alt: 'Classmate group photo 26' },
        { id: 'gal27', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215427/119136536_1792483874223130_6139437572609339230_n_bkab5a.jpg', alt: 'Classmate group photo 27' },
        { id: 'gal28', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215427/119120043_773607726785901_9076214220432773088_n_grhfnc.jpg', alt: 'Classmate group photo 28' },
        { id: 'gal29', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215433/241708822_857064378531653_3907210301253218927_n_k7xcga.jpg', alt: 'Classmate group photo 28' },
        { id: 'gal30', src: 'https://res.cloudinary.com/dqxwpxame/image/upload/v1752215435/241344464_173228141604924_3132448217948157434_n_iryitw.jpg', alt: 'Classmate group photo 28' },
        // Add more image URLs here!
        // Example: { id: 'gal29', src: 'YOUR_CLOUDINARY_URL_HERE', alt: 'Description of photo' },
    ];

    initialClassmates.sort((a, b) => a.name.localeCompare(b.name));

    const [classmates, setClassmates] = useState(initialClassmates);
    const [selectedClassmate, setSelectedClassmate] = useState(null); // To view individual classmate details
    const [currentPage, setCurrentPage] = useState('home'); // 'home', 'classmates', or 'gallery'

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 font-inter text-gray-800 p-4 sm:p-8">
            {currentPage === 'home' ? (
                // Homepage View
                <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center">
                    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-700 mb-4">
                            To: My SPJ pips
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Hi guys. I have been thinking of ways to give something to you guys since we're going to go our separate ways for real this time. I've decided to create this small website containing a message for each of you and with a corresponding song that kinda reminds me of each and every one of you. Some may not be 100% accurate hehe. Goodluck sa ating college and future lives!!
                        </p>
                        <div className="w-full max-w-2xl mx-auto mb-8 rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="https://res.cloudinary.com/dqxwpxame/image/upload/v1751764890/357070966_299139499195106_4093967020498687689_n_qvpzna.jpg" // Replaced with a public placeholder
                                alt="Class Memories Banner"
                                className="w-full h-auto object-cover"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x300/cccccc/000000?text=Banner+Image+Missing"; }}
                            />
                        </div>
                        <button
                            onClick={() => setCurrentPage('classmates')}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 text-xl"
                        >
                            Click here
                        </button>
                    </div>
                </div>
            ) : currentPage === 'classmates' ? (
                // Classmate List/Detail View
                <>
                    {/* Header (moved inside this block for conditional rendering) */}
                    <header className="text-center mb-8">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-700 mb-2 rounded-lg p-2 bg-white shadow-md inline-block">
                            To: My SPJ Pips
                        </h1>
                        <p className="text-lg text-gray-600">Sorry sa Pics, wala akong mga solo pics ninyo hehehe</p>
                    </header>

                    <main className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
                        {selectedClassmate ? (
                            // Classmate Detail View
                            <div className="space-y-6">
                                <button
                                    onClick={() => setSelectedClassmate(null)}
                                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                                >
                                    &larr; Back to Classmates
                                </button>
                                <div className="flex flex-col items-center mb-6">
                                    {selectedClassmate.picture && (
                                        <img
                                            src={selectedClassmate.picture}
                                            alt={selectedClassmate.name}
                                            className="w-32 h-32 rounded-full object-cover border-4 border-purple-400 shadow-lg mb-4"
                                            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x100/cccccc/000000?text=No+Image"; }}
                                        />
                                    )}
                                    <h2 className="text-3xl font-bold text-purple-700">{selectedClassmate.name}</h2>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                                    <h3 className="text-xl font-semibold text-gray-700 mb-2">My Message:</h3>
                                    <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">{selectedClassmate.message}</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Their Song:</h3>
                                    <p className="text-gray-800">
                                        <span className="font-bold">{selectedClassmate.songTitle}</span> by{" "}
                                        <span className="italic">{selectedClassmate.songArtist}</span>
                                    </p>
                                    {selectedClassmate.songReason && (
                                        <p className="text-sm text-gray-600 mt-1">
                                            <span className="font-semibold">Reason:</span> {selectedClassmate.songReason}
                                        </p>
                                    )}
                                    {selectedClassmate.songLink && (
                                        <a
                                            href={selectedClassmate.songLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline mt-2 inline-block"
                                        >
                                            Listen Here <span className="ml-1">&#x2197;</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ) : (
                            // Classmate List View (with new Gallery button)
                            <>
                                <h2 className="text-2xl font-bold text-gray-700 mb-4">Scroll Down to View Gallery</h2>
                                {classmates.length === 0 ? (
                                    <p className="text-gray-600 text-center py-8">
                                        No classmates found. Please add some to the `initialClassmates` array in the code!
                                    </p>
                                ) : (
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {classmates.map((classmate) => (
                                            <li key={classmate.id} className="bg-purple-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer flex items-center space-x-4"
                                                onClick={() => setSelectedClassmate(classmate)}
                                            >
                                                {classmate.picture && (
                                                    <img
                                                        src={classmate.picture}
                                                        alt={classmate.name}
                                                        className="w-16 h-16 rounded-full object-cover border-2 border-purple-300"
                                                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/64x64/cccccc/000000?text=No+Image"; }}
                                                    />
                                                )}
                                                <div>
                                                    <h3 className="text-xl font-semibold text-purple-700">{classmate.name}</h3>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Song: <span className="font-semibold">{classmate.songTitle}</span> by <span className="italic">{classmate.songArtist}</span>
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {/* New button to navigate to Gallery page */}
                                <div className="mt-8 text-center">
                                    <button
                                        onClick={() => setCurrentPage('gallery')}
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-xl"
                                    >
                                        View Gallery
                                    </button>
                                </div>
                            </>
                        )}
                    </main>
                </>
            ) : (
                // Gallery Page View
                <>
                    <header className="text-center mb-8">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-2 rounded-lg p-2 bg-white shadow-md inline-block">
                            Class Memories Gallery
                        </h1> <br></br>
                        <h5 className="text-small sm:text-small font-bold text-blue-700 mb-2 rounded-lg p-2 bg-white shadow-md inline-block">
                            A collection of photos of our JHS years
                        </h5> <br></br>
                        <h5 className="text-small sm:text-small font-bold text-blue-700 mb-2 rounded-lg p-2 bg-white shadow-md inline-block">
                           (may or may not have epic pics)
                        </h5>
                    </header>
                    <main className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
                        <button
                            onClick={() => setCurrentPage('classmates')}
                            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 mb-6"
                        >
                            &larr; Back to Classmates
                        </button>

                        {galleryImages.length === 0 ? (
                            <p className="text-gray-600 text-center py-8">
                                No images in the gallery yet. Add some to the `galleryImages` array!
                            </p>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {galleryImages.map((image) => (
                                    <div key={image.id} className="relative w-full h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden shadow-md group">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/cccccc/000000?text=Image+Missing"; }}
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <p className="text-white text-center p-2 text-sm">{image.alt}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </main>
                </>
            )}
        </div>
    );
};

export default App;
