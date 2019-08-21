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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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

        ],
        userdata: [
            {data:"Username",value:"Vova Borisenko"},
            {data:"Age",value:"26"},
            {data:"Hobbies",value:"trecking and cooking"},
            {data:"Studies",value:"University of World"},
            {data:"Job",value:"Full stack Developer"},
            {data:"Description",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        ],
        dialogs: [

        ]
    }
}

export default state;