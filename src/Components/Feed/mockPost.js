const posts = [
  {
    user: {
      name: "Ashutosh Singh",
      title: "Solo Explorer",
      profilePic:
        "https://media.licdn.com/dms/image/v2/D4D03AQF34X7QsXcp9w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696980839339?e=1750291200&v=beta&t=yzKjXfViRYphtcwEpnKW8koJFqf3EkV_5rtPFADNbnQ",
      occupation: "Software Engineer",
      time: "10h",
    },
    postContent:
      "Planning a bike trip to Leh-Ladakh in June. Need 2-3 folks who are down for crazy roads, mountain chai, and soul talks under stars.",
    stats: { likes: 29, comments: 11, reposts: 3, views: 204 },
  },
  {
    user: {
      name: "Niharika Mehta",
      title: "Beach Lover",
      profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
      occupation: "Product Manager",
      time: "2h",
    },
    postContent:
      "Goa trip coming up next month! Looking for 2 people to split stay and scooter rentals. Sunset squad, where you at?",
    stats: { likes: 64, comments: 17, reposts: 2, views: 456 },
  },
  {
    user: {
      name: "Rohan Sharma",
      title: "Visual Storyteller",
      profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
      occupation: "UI/UX Designer",
      time: "4h",
    },
    postContent:
      "Exploring Jaipur for a photography series on architecture and street life. Anyone up for some aesthetic café hopping?",
    stats: { likes: 40, comments: 6, reposts: 1, views: 312 },
  },
  {
    user: {
      name: "Sara Khan",
      title: "Curious Wanderer",
      profilePic: "https://randomuser.me/api/portraits/women/68.jpg",
      occupation: "Data Scientist",
      time: "6h",
    },
    postContent:
      "Rishikesh calling! River rafting, camping, and yoga mornings. Need 1-2 travel buddies. Let’s go offbeat!",
    stats: { likes: 82, comments: 14, reposts: 5, views: 711 },
  },
  {
    user: {
      name: "Aman Gupta",
      title: "Adventure Addict",
      profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
      occupation: "DevOps Engineer",
      time: "12h",
    },
    postContent:
      "Heading to Manali for trekking in July. Anyone who’s okay with hostels, bonfires, and maggi in the snow — hit me up!",
    stats: { likes: 51, comments: 9, reposts: 2, views: 403 },
  },
  {
    user: {
      name: "Priya Das",
      title: "Culture Buff",
      profilePic: "https://randomuser.me/api/portraits/women/29.jpg",
      occupation: "Marketing Lead",
      time: "3h",
    },
    postContent:
      "Varanasi trip in the works! Ganga Aarti, hidden ghats, and some local thali hunting. Looking for chill company!",
    stats: { likes: 77, comments: 13, reposts: 3, views: 552 },
  },
  {
    user: {
      name: "Vikram Thakur",
      title: "Code & Compass",
      profilePic: "https://randomuser.me/api/portraits/men/45.jpg",
      occupation: "Frontend Developer",
      time: "7h",
    },
    postContent:
      "Quick 2-day escape to Kasol this weekend. Need 1 more travel buddy from Delhi. Let’s chill in the hills!",
    stats: { likes: 45, comments: 5, reposts: 0, views: 318 },
  },
  {
    user: {
      name: "Ayesha Mirza",
      title: "History Hunter",
      profilePic: "https://randomuser.me/api/portraits/women/41.jpg",
      occupation: "Content Strategist",
      time: "5h",
    },
    postContent:
      "Planning a heritage trail across Hampi and Badami. If you love ruins, mythology, and filter coffee — DM me!",
    stats: { likes: 59, comments: 7, reposts: 1, views: 362 },
  },
  {
    user: {
      name: "Kabir Joshi",
      title: "Code-n-Nature Guy",
      profilePic: "https://randomuser.me/api/portraits/men/22.jpg",
      occupation: "Backend Engineer",
      time: "8h",
    },
    postContent:
      "Want to escape to Jim Corbett for a digital detox weekend. Wildlife safari + peaceful stay. Looking for 1-2 introvert types.",
    stats: { likes: 38, comments: 3, reposts: 0, views: 296 },
  },
  {
    user: {
      name: "Sneha Roy",
      title: "Soul Connector",
      profilePic: "https://randomuser.me/api/portraits/women/36.jpg",
      occupation: "HR Specialist",
      time: "1h",
    },
    postContent:
      "Looking for female travelers for a spiritual retreat in Dharamshala. Quiet walks, meditation, and deep convos ❤️",
    stats: { likes: 94, comments: 12, reposts: 4, views: 740 },
  },
  {
    user: {
      name: "Tanvi Rawat",
      title: "Nature Seeker",
      profilePic: "https://randomuser.me/api/portraits/women/50.jpg",
      occupation: "Environmentalist",
      time: "2h",
    },
    postContent:
      "Heading to Spiti Valley next month for a nature trail and monastery hopping. Need one more eco-friendly soul to join!",
    stats: { likes: 73, comments: 10, reposts: 2, views: 520 },
  },
  {
    user: {
      name: "Rajat Bansal",
      title: "City Escape Artist",
      profilePic: "https://randomuser.me/api/portraits/men/53.jpg",
      occupation: "Chartered Accountant",
      time: "5h",
    },
    postContent:
      "Thinking of a weekend getaway to Mussoorie. Anyone from Delhi NCR up for a spontaneous road trip?",
    stats: { likes: 44, comments: 8, reposts: 1, views: 347 },
  },
  {
    user: {
      name: "Divya Khandelwal",
      title: "Tea and Trails Girl",
      profilePic: "https://randomuser.me/api/portraits/women/25.jpg",
      occupation: "Business Analyst",
      time: "3h",
    },
    postContent:
      "Darjeeling plans in May! I’m looking for 1-2 fellow explorers who love toy trains, tea estates, and scenic views!",
    stats: { likes: 66, comments: 9, reposts: 3, views: 415 },
  },
  {
    user: {
      name: "Harshit Verma",
      title: "Temple Trail Nomad",
      profilePic: "https://randomuser.me/api/portraits/men/20.jpg",
      occupation: "Software Tester",
      time: "9h",
    },
    postContent:
      "Visiting Tamil Nadu’s temple towns next week – Madurai, Thanjavur, Rameswaram. Anyone on a similar path?",
    stats: { likes: 48, comments: 4, reposts: 1, views: 368 },
  },
  {
    user: {
      name: "Shivani Kapoor",
      title: "Spiritual Roamer",
      profilePic: "https://randomuser.me/api/portraits/women/61.jpg",
      occupation: "Yoga Instructor",
      time: "6h",
    },
    postContent:
      "Planning a trip to Auroville and Pondicherry. Conscious living, French cafes, and beach meditation. Join in?",
    stats: { likes: 84, comments: 11, reposts: 2, views: 625 },
  },
  {
    user: {
      name: "Kunal Jha",
      title: "Festival Hopper",
      profilePic: "https://randomuser.me/api/portraits/men/18.jpg",
      occupation: "Event Manager",
      time: "7h",
    },
    postContent:
      "Going to Pushkar during the Camel Fair! Looking for photo enthusiasts and culture lovers to vibe with.",
    stats: { likes: 55, comments: 7, reposts: 0, views: 389 },
  },
  {
    user: {
      name: "Aarushi Deshmukh",
      title: "Art & Alley Explorer",
      profilePic: "https://randomuser.me/api/portraits/women/32.jpg",
      occupation: "Fine Arts Student",
      time: "4h",
    },
    postContent:
      "Kolkata trip coming up! Looking for someone to visit museums, street art, and old cafés with me.",
    stats: { likes: 60, comments: 6, reposts: 1, views: 330 },
  },
  {
    user: {
      name: "Ishaan Dutta",
      title: "Monsoon Chaser",
      profilePic: "https://randomuser.me/api/portraits/men/31.jpg",
      occupation: "Civil Engineer",
      time: "11h",
    },
    postContent:
      "Planning a Western Ghats bike tour during monsoon. Need someone crazy enough to chase rain and waterfalls!",
    stats: { likes: 70, comments: 10, reposts: 3, views: 498 },
  },
  {
    user: {
      name: "Meghna Iyer",
      title: "Wildlife Whisperer",
      profilePic: "https://randomuser.me/api/portraits/women/33.jpg",
      occupation: "Wildlife Photographer",
      time: "8h",
    },
    postContent:
      "Heading to Kaziranga National Park to photograph rhinos. Wildlife enthusiasts, let’s do this together!",
    stats: { likes: 91, comments: 12, reposts: 2, views: 640 },
  },
  {
    user: {
      name: "Aditya Narang",
      title: "Budget Backpacker",
      profilePic: "https://randomuser.me/api/portraits/men/40.jpg",
      occupation: "Freelance Developer",
      time: "1h",
    },
    postContent:
      "Backpacking across Northeast India in a shoestring budget. Trains, hostels, and local food. Who’s game?",
    stats: { likes: 89, comments: 13, reposts: 4, views: 678 },
  },
];

export default posts;
