export type Lang = 'en' | 'hy'

export const translations = {
  en: {
    // Nav
    nav: {
      story: 'Letter',
      gallery: 'Gallery',
      timeline: 'Wedding Day',
      rsvp: 'RSVP',
    },

    // Hero
    hero: {
      preTitle: 'We are getting married',
      tagline: 'Two souls, one love story.',
      explore: 'Explore',
    },

    // Love Letter
    letter: {
      label: 'Our Words',
      title: 'Letter',
      salutation: 'Dear Guests,',
      body: [
        'From the bottom of our hearts, we want to say how much your presence means to us on this special day. You are not simply our guests — you are the precious people with whom we are beginning this new chapter of our lives.',
        'Very soon, beneath the magical sky of Haghartsin, we will make an eternal vow to one another — to share all of life\'s joys and trials together, to preserve love, patience, and unwavering devotion through the years. And you will be the eternal witnesses of that sacred promise.',
        'Every detail of this celebration has been created with love and care, and our greatest wish is that you feel that warmth — in the fragrance of every flower, in the sound of every melody, and in every glass raised in our honor.',
        'We eagerly await that day — to create memories together that will warm our hearts for the rest of our lives.',
      ],
      closing: 'With love,',
      signature: 'Arman & Nelly',
      ps: 'P.S. — Dance like nobody is watching. We will be.',
    },

    // Gallery
    gallery: {
      label: 'Unforgettable moments',
      title: 'Our Gallery',
    },

    // Timeline
    timeline: {
      label: 'The perfect day',
      title: 'Wedding Day',
      subtitle: 'A day filled with love, laughter, and memories.',
      items: [
        { time: '12:00', title: 'Haghartsin', subtitle: 'Dilijan', icon: '⛪' },
        { time: '13:30', title: 'Photo Shoot', subtitle: 'Zartak Ranch', icon: '📸' },
        { time: '15:00', title: "Groom's House", subtitle: 'Sevan, Nalbandyan 39', icon: '🏠' },
        { time: '17:00', title: 'Restaurant', subtitle: 'Granada Hall, Hrazdan', icon: '🥂' },
        { time: '21:00', title: 'DJ', subtitle: '', icon: '🎧' },
      ],
    },

    // RSVP
    rsvp: {
      label: 'Will you join us?',
      title: 'RSVP',
      deadline: 'Please respond by July 15, 2026',
      fields: {
        name: 'Full Name',
        namePlaceholder: 'Your full name',
        phone: 'Phone Number',
        phonePlaceholder: '+1 (555) 000-0000',
        guests: 'Number of Guests',
        guestLabel: (n: number) => `${n} ${n === 1 ? 'Guest' : 'Guests'}`,
        attending: 'Will you attend?',
        accept: '✓ Joyfully Accept',
        decline: '✗ Regretfully Decline',
        dietary: 'Dietary Notes (optional)',
        dietaryPlaceholder: 'Vegetarian, vegan, gluten-free, allergies...',
        submit: 'Send My RSVP',
        sending: 'Sending...',
      },
      errors: {
        name: 'Please enter your name',
        phone: 'Please enter your phone number',
        attending: 'Please select your attendance',
      },
      success: {
        yes: (name: string) =>
          `Thank you, ${name}! We are so excited to celebrate with you on our special day. 🥂`,
        no: (name: string) =>
          `Thank you, ${name}. We are sorry you cannot make it, but we will be thinking of you. 💛`,
        titleYes: 'See you there!',
        titleNo: 'We will miss you!',
        reset: 'Submit another response',
      },
    },

    // Music
    music: {
      title: 'Love is in the Air',
      body: 'Play the song that will set the mood for our special day.',
      play: '♪ Play Our Song',
      skip: 'Skip for now',
      label: 'Our Song',
      playing: 'Now Playing',
      paused: 'Paused',
    },

    // Footer
    footer: {
      quote:
        '"Love is patient, love is kind… it rejoices in the truth, it always protects, always trusts, always hopes, always perseveres."',
      verse: '1 Corinthians 13:4–7',
      madeWith: 'Made with love',
    },

    // Countdown
    countdown: {
      days: 'Days',
      hours: 'Hours',
      mins: 'Mins',
      secs: 'Secs',
      married: 'We are married! 🎉',
    },

    // Loading
    loading: 'Preparing something beautiful...',
  },

  hy: {
    // Nav
    nav: {
      story: 'Նամակ',
      gallery: 'Պատկերասրահ',
      timeline: 'Հարսանիքի Օրը',
      rsvp: 'Հաստատեք',
    },

    // Hero
    hero: {
      preTitle: 'Մենք ամուսնանում ենք',
      tagline: 'Երկու հոգի, մեկ սիրո պատմություն։',
      explore: 'Ուսումնասիրել',
    },

    // Love Letter
    letter: {
      label: 'Մեր Խոսքը',
      title: 'Նամակ',
      salutation: 'Հարգելի՛ հյուրեր,',
      body: [
        'Մեր սրտի խորքից ցանկանում ենք ասել, թե որքան կարևոր է մեզ համար ձեր ներկայությունն այս առանձնահատուկ օրը։ Դուք պարզապես մեր հյուրերը չեք․ դուք այն թանկագին մարդիկ եք, ում հետ կյանքի այս նոր էջն ենք սկսում։',
        'Շուտով, Հաղարծինի կախարդական երկնքի ներքո, մենք միմյանց հավերժական խոստում կտանք՝ միասին կիսելու կյանքի բոլոր ուրախություններն ու փորձությունները, պահպանելու սերը, համբերությունն ու անսասան նվիրվածությունը տարիների ընթացքում։ Եվ դուք կլինեք այդ ուխտի հավերժ վկաները։',
        'Այս տոնի յուրաքանչյուր մանրուք ստեղծվել է սիրով ու հոգատարությամբ, և մեր ամենամեծ ցանկությունն է, որ դուք զգաք այդ ջերմությունը՝ յուրաքանչյուր ծաղկի բույրի, յուրաքանչյուր մեղեդու հնչյունի և ի պատիվ մեզ բարձրացված յուրաքանչյուր բաժակի մեջ։',
        'Անհամբեր սպասում ենք այդ օրվան՝ միասին կերտելու հիշողություններ, որոնք կջերմացնեն մեր սրտերը ողջ կյանքի ընթացքում։',
      ],
      closing: 'Սիրով՝',
      signature: 'Արման և Նելլի',
      ps: 'Բ.Գ. — Պարեք այնպես, կարծես ոչ ոք չի նայում։ Մենք կնայենք։',
    },

    // Gallery
    gallery: {
      label: 'Անմոռաց պահեր',
      title: 'Մեր Պատկերասրահը',
    },

    // Timeline
    timeline: {
      label: 'Կատարյալ օրը',
      title: 'Հարսանիքի Օրը',
      subtitle: 'Մի օր լի սիրով, ծիծաղով եւ հիշողություններով։',
      items: [
        { time: 'Ժ. 12:00', title: 'Հաղարծին', subtitle: 'Դիլիջան', icon: '⛪' },
        { time: 'Ժ. 13:30', title: 'Ֆոտոշութ', subtitle: 'Zartak Ranch', icon: '📸' },
        { time: 'Ժ. 15:00', title: 'Փեսայի տուն', subtitle: 'Սևան, Նալբանդյան 39', icon: '🏠' },
        { time: 'Ժ. 17:00', title: 'Ռեստորան', subtitle: 'Granada Hall, Հրազդան', icon: '🥂' },
        { time: 'Ժ. 21:00', title: 'Դիջեյ', subtitle: '', icon: '🎧' },
      ],
    },

    // RSVP
    rsvp: {
      label: 'Կ՞մասնակցեք',
      title: 'Հաստատեք',
      deadline: 'Խնդրում ենք պատասխանել մինչև հուլիսի 15, 2026',
      fields: {
        name: 'Անուն Ազգանուն',
        namePlaceholder: 'Ձեր անուն ազգանունը',
        phone: 'Հեռախոսի Համար',
        phonePlaceholder: '+374 (00) 000-000',
        guests: 'Հյուրերի Քանակ',
        guestLabel: (n: number) => `${n} ${n === 1 ? 'Հյուր' : 'Հյուր'}`,
        attending: 'Կ՞մասնակցեք',
        accept: '✓ Ուրախությամբ Ընդունում եմ',
        decline: '✗ Ափսոսանքով Հրաժարվում եմ',
        dietary: 'Սննդային Նկատառումներ (պարտադիր չէ)',
        dietaryPlaceholder: 'Բուսակեր, վեգան, առանց գլուտենի, ալերգիա...',
        submit: 'Ուղարկել',
        sending: 'Ուղարկվում է...',
      },
      errors: {
        name: 'Խնդրում ենք մուտքագրել ձեր անունը',
        phone: 'Խնդրում ենք մուտքագրել հեռախոսի համարը',
        attending: 'Խնդրում ենք ընտրել',
      },
      success: {
        yes: (name: string) =>
          `Շնորհակալություն, ${name}։ Շատ ուրախ ենք, որ կնշենք միասին մեր հատուկ օրը։ 🥂`,
        no: (name: string) =>
          `Շնորհակալություն, ${name}։ Կարոտելու ենք ձեզ, բայց կմտածենք ձեր մասին։ 💛`,
        titleYes: 'Կհանդիպենք։',
        titleNo: 'Կարոտելու ենք։',
        reset: 'Ուղարկել մեկ այլ պատասխան',
      },
    },

    // Music
    music: {
      title: 'Սերը Օդում Է',
      body: 'Նվագեք երգը, որը տրամադրություն կստեղծի մեր հատուկ օրվա համար։',
      play: '♪ Նվագել Մեր Երգը',
      skip: 'Բաց թողնել',
      label: 'Մեր Երգը',
      playing: 'Հնչում է',
      paused: 'Դադար',
    },

    // Footer
    footer: {
      quote:
        '«Սերը համբերատար է, սերը բարի է… ուրախանում է ճշմարտությամբ, ամեն ինչ համբերում է, ամեն ինչ հավատում է, ամեն ինչ հուսում է, ամեն ինչ դիմանում է»։',
      verse: 'Կորնթացիս 13:4–7',
      madeWith: 'Սարքված սիրով',
    },

    // Countdown
    countdown: {
      days: 'Օր',
      hours: 'Ժամ',
      mins: 'Րոպե',
      secs: 'Վայրկյան',
      married: 'Մենք ամուսնացած ենք! 🎉',
    },

    // Loading
    loading: 'Պատրաստում ենք ինչ-որ գեղեցիկ բան...',
  },
} as const

export type Translations = (typeof translations)['en']
