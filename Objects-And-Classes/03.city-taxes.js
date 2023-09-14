function cityTaxes(name,population,treasury){
let city = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
            this.treasury = Math.ceil(this.treasury+this.population*this.taxRate);
    },
    applyGrowth(percentege){
        this.population =Math.ceil(this.population + this.population*(percentege/100));
    },
    applyRecession(percentege){
        this.treasury = Math.ceil(this.treasury - this.treasury*(percentege/100));
    }
}
return city;
}