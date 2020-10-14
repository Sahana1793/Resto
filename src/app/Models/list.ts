export class List {
    constructor(
        public id: number,
        public name: string,
        public address: string,
        public email: string){
            this.id = id;
            this.name = name;
            this.address = address;
            this.email = email;
        }
}