class FareRepositoryService {
    static getBaseFare() {
        const data = { data: { baseFare: 100 } };
        return new Promise((resolve, reject) => { resolve(data) });
    }

    static getWeekendOffPercentage() {
        const data = { data: { value: 10 } };
        return new Promise((resolve, reject) => { resolve(data) });
    }
}

export default FareRepositoryService;