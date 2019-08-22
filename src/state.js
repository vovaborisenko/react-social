let state = {
  header: {
    menuicon: [
      {
        title: "Settings",
        icon: "cogs",
        link: "settings"
      },
      {
        title: "Notification",
        icon: "bell-o",
        link: "notification",
        badge: "2"
      },
      {
        title: "Profile",
        icon: "user",
        link: "profile"
      },
      {
        title: "Wall",
        icon: "database",
        link: "wall"
      }
    ]
  },
  sidebar: {
    name: "Vova Borisenko",
    img: "./img/user.jpg",
    link: "/profile",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  profilecontent: {
    banner: {
      img: "./img/banner.jpg"
    },
    tabs: [
      {
        tabtext: "Last Posts",
        tablink: "/"
      },
      {
        tabtext: "Profile",
        tablink: "/profile"
      },
      {
        tabtext: "Chat",
        tablink: "/chat"
      }
    ],
    posts: [
      {
        user: {
          name: "VB",
          link: "#",
          img: "./img/user.jpg"
        },
        post: {
          text: "Lorem Ipsum Dolor si amet",
          img: "",
          video: "",
          time: "2h"
        },
        reaction: {
          likes: "12",
          smiles: "3"
        },
        comments: [
          {
            username: "User1",
            text: "Lorem Ipsum Dolor si amet"
          },
          {
            username: "User2",
            text: "Lorem Ipsum Dolor si amet 😂"
          }
        ]
      },
      {
        user: {
          name: "VB",
          link: "#",
          img: "./img/user.jpg"
        },
        post: {
          text: "Lorem Ipsum Dolor si amet",
          img: "./img/post.jpg",
          video: "",
          time: "2h"
        },
        reaction: {
          likes: "112",
          smiles: "35"
        },
        comments: [
          {
            username: "User3",
            text: "Lorem Ipsum Dolor si amet"
          },
          {
            username: "User4",
            text: "Lorem Ipsum Dolor si amet 😂"
          }
        ]
      },
      {
        user: {
          name: "VB",
          link: "#",
          img: "./img/user.jpg"
        },
        post: {
          text: "Lorem Ipsum Dolor si amet",
          img: "",
          video: "./img/post-video.mp4",
          time: "2h"
        },
        reaction: {
          likes: "412",
          smiles: "23"
        },
        comments: [
          {
            username: "User5",
            text: "Lorem Ipsum Dolor si amet"
          },
          {
            username: "User6",
            text: "Lorem Ipsum Dolor si amet 😂"
          }
        ]
      }
    ],
    userdata: [
      { data: "Username", value: "Vova Borisenko" },
      { data: "Age", value: "26" },
      { data: "Hobbies", value: "trecking and cooking" },
      { data: "Studies", value: "University of World" },
      { data: "Job", value: "Full stack Developer" },
      {
        data: "Description",
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ],
    dialogs: [
      {
        name: "Alex",
        avatar: "./img/user2.jpg",
        time: "An hour ago",
        message: "Lorem ipmus sdoedr"
      },
      {
        name: "Marin",
        avatar: "./img/user3.jpg",
        time: "Yesterday",
        message: "Ipmus sdoedr"
      },
      {
        name: "Kate",
        avatar: "./img/user4.jpg",
        time: "2 days ago",
        message: "Lorem ipmus sdoedr"
      },
      {
        name: "John",
        avatar: "./img/user5.jpg",
        time: "3 days ago",
        message: "HELLO, Lorem ipmus sdoedr"
      }
    ]
  }
};

export default state;
