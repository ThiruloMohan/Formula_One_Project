export class raceModel {
    public winnersArrayList: any = [];

    setWinnersList(lists: any): void {
        this.winnersArrayList = lists;
    }
    getWinnersList(){
        return this.winnersArrayList;
    }
}