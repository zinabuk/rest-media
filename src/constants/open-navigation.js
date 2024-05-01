export const OPEN_MENUS = [
  // {
  //   label: 'Home',
  //   name: 'home'
  // },
  {
    label: 'About Us',
    name: 'about',
    SUB_MENUS: [
      {
        label: 'Our Story',
        name: 'our-story',
        requiresRoute: true
      },
      {
        label: 'Our Staff',
        name: 'staff',
        requiresRoute: true
      },
      {
        label: 'Contact Us',
        name: 'contact'
      }
    ]
  },
  {
    label: 'What We do',
    name: 'about',
    SUB_MENUS: [
      {
        label: 'Our Story',
        name: 'our-story',
        requiresRoute: true
      },
      {
        label: 'Our Staff',
        name: 'staff',
        requiresRoute: true
      },
      {
        label: 'Contact Us',
        name: 'contact'
      }
    ]
  },
  // {
  //   label: 'Engagement',
  //   name: 'engagement',
  //   SUB_MENUS: [
     
  //   ]
  // },
  {
    label: 'Take Action',
    name: 'funding',
    SUB_MENUS: [
      {
        label: 'Sponsors',
        name: 'sponsors'
      },
      {
        label: 'Partnership',
        name: 'partnership'
      },
      {
        label: 'Volunteers',
        name: 'volunteers'
      },
      {
        label: 'Community Forum',
        name: 'community-forum'
      },
      {
        label: 'Donate',
        name: 'donate'
      }
    ]
  },
  {
    label: 'Marketing',
    name: 'marketing',
    SUB_MENUS: [
      {
        label: 'Email Marketing',
        name: 'email-marketing'
      },
      {
        label: 'Online Advertising',
        name: 'online-advertising'
      },
      {
        label: 'Archive',
        name: 'archive',
        requiresRoute: true
      },
      {
        label: 'Short Code',
        name: 'short-code'
      }
    ]
  },
  {
    label: 'Multimedia',
    name: 'multimedia',
    SUB_MENUS: [
      {
        label: 'Live Streaming',
        name: 'live-streaming'
      },
      {
        label: 'Podcast',
        name: 'podcast'
      },
      {
        label: 'Gallery',
        name: 'gallery',
        requiresRoute: true
      }
    ]
  },

  {
    label: 'Latest',
    // name: 'events',
    SUB_MENUS: [
      {
        label: 'Upcoming Events',
        name: 'upcoming-events',
        requiresRoute: false
      },
      {
        label: 'Past Events',
        name: 'past-events',
        requiresRoute: false
      },
      {
        label: 'Event Registration',
        name: 'event-registration',
        requiresRoute: false
      }
    ]
  }
]
