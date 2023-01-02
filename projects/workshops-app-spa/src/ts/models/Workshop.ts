interface Workshop {
    id?: number,
    name: string,
    category: string,
    description: string,
    startDate: string,
    endDate: string,
    time: string,
    location: {
        address: string,
        city: string,
        state: string
    },
    modes: {
        inPerson: boolean,
        online: boolean
    },
    imageUrl: string
}

export default Workshop;
