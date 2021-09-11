export const navContainerAnimation = {
    visible: {
        height: 110,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.1,
            staggerDirection: 1

        }
    },
    hidden: {
        height: 0,
        transition: {
            when: 'afterChildren',
            staggerChildren: 0.1,
            staggerDirection: -1
        }

    }
}

export const navContainerItemAnimation = {
    visible: {
        opacity: 1,
        y: [0,5,0]

    },
    hidden: {
        opacity: 0,
        x: [0,5,0]
    }
}