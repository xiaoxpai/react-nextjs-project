const DUMMY_EVENTS=
    [
    {
        id: 'e1',
        title: 'Programming for everyone',
        description: 'Learn programming',
        location: 'Somewhere in the world',
        date: '2022-05-12',
        image: 'images/coding-event.png',
        isFeatured: false
    },
    {
        id: 'e2',
        title: 'Swimming lessons',
        description: 'Learn swimming',
        location: 'Somewhere in the world',
        date: '2022-05-30',
        image: 'images/swimming-event.png',
        isFeatured: true
    },
    {
        id: 'e3',
        title: 'Cooking lessons',
        description: 'Learn cooking',
        location: 'Somewhere in the world',
        date: '2022-06-12',
        image: 'images/cooking-event.png',
        isFeatured: true
    },
    {
        id: 'e4',
        title: 'Biking lessons',
        description: 'Learn biking',
        location: 'Somewhere in the world',
        date: '2022-06-25',
        image: 'images/biking-event.png',
        isFeatured: true
    },
    {
        id: 'e5',
        title: 'Dancing lessons',
        description: 'Learn dancing',
        location: 'Somewhere in the world',
        date: '2022-07-12',
        image: 'images/dancing-event.png',
        isFeatured: true
    },
    {
        id: 'e6',
        title: 'Singing lessons',
        description: 'Learn singing',
        location: 'Somewhere in the world',
        date: '2022-07-25',
        image: 'images/singing-event.png',
        isFeatured: true
    },
    {
        id: 'e7',
        title: 'Yoga lessons',
        description: 'Learn yoga',
        location: 'Somewhere in the world',
        date: '2022-08-12',
        image: 'images/swimming-event.png',
        isFeatured: true
    },
    {
        id: 'e8',
        title: 'Meditation lessons',
        description: 'Learn meditation',
        location: 'Somewhere in the world',
        date: '2022-08-25',
        image: 'images/swimming-event.png',
        isFeatured: true
    },
    {
        id: 'e9',
        title: 'Gardening lessons',
        description: 'Learn gardening',
        location: 'Somewhere in the world',
        date: '2022-09-12',
        image: 'images/swimming-event.png',
        isFeatured: true
    },
    {
        id: 'e10',
        title: 'Painting lessons',
        description: 'Learn painting',
        location: 'Somewhere in the world',
        date: '2022-09-25',
        image: 'images/swimming-event.png',
        isFeatured: true
    },
    {
        id: 'e11',
        title: 'Photography lessons',
        description: 'Learn photography',
        location: 'Somewhere in the world',
        date: '2022-10-12',
        image: 'images/swimming-event.png',
        isFeatured: true
    },
    {
        id: 'e12',
        title: 'Sculpture lessons',
        description: 'Learn sculpture',
        location: 'Somewhere in the world',
        date: '2022-10-25',
        image: 'images/swimming-event.png',
        isFeatured: true
    },
    {
        id: 'e13',
        title: 'Pottery lessons',
        description: 'Learn pottery',
        location: 'Somewhere in the world',
        date: '2022-11-12',
        image: 'images/swimming-event.png',
        isFeatured: true
    },
    {
        id: 'e14',
        title: 'Woodworking lessons',
        description: 'Learn woodworking',
        location: 'Somewhere in the world',
        date: '2022-11-25',
        image: 'images/swimming-event.png',
        isFeatured: true
    },
    {
        id: 'e15',
        title: 'Knitting lessons',
        description: 'Learn knitting',
        location: 'Somewhere in the world',
        date: '2022-12-12',
        image: 'images/swimming-event.png',
        isFeatured: true
    },
    {
        id: 'e16',
        title: 'Crocheting lessons',
        description: 'Learn crocheting',
        location: 'Somewhere in the world',
        date: '2022-12-25',
        image: 'images/swimming-event.png',
        isFeatured: true
    },
    {
        id: 'e17',
        title: 'Embroidery lessons',
        description: 'Learn embroidery',
        location: 'Somewhere in the world',
        date: '2023-01-12',
        image: 'images/swimming-event.png',
        isFeatured: true
    },
    {
        id: 'e18',
        title: 'Quilting lessons',
        description: 'Learn quilting',
        location: 'Somewhere in the world',
        date: '2023-01-25',
        image: 'images/swimming-event.png',
        isFeatured: false
    },
    {
        id: 'e19',
        title: 'Sewing lessons',
        description: 'Learn sewing',
        location: 'Somewhere in the world',
        date: '2023-02-12',
        image: 'images/swimming-event.png',
        isFeatured: true
    },
    {
        id: 'e20',
        title: 'Weaving lessons',
        description: 'Learn weaving',
        location: 'Somewhere in the world',
        date: '2023-02-25',
        image: 'images/coding-event.png',
        isFeatured: false
    }
]


/**
 * 获取指定事件
 * @returns {({date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean}|{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean}|{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean}|{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean}|{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean})[]}
 */
export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

/**
 * 获取所有事件
 * @returns {[{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean},{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean},{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean},{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean},{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]}
 */
export function getAllEvents() {
    return DUMMY_EVENTS;
}

/**
 * 过滤事件
 * @param dateFilter
 * @returns {({date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean}|{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean}|{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean}|{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean}|{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean})[]}
 */
export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;

    return DUMMY_EVENTS.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
}

export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
}