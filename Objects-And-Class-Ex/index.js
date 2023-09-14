let heroes = [
    {
        hero: 'Hero 1',
        level:33,
    },
    {
        hero: 'Hero 2',
        level:5,
    },
    {
        hero: 'Hero 3',
        level:2,
    }
];
let sortedHeroes = heroes.sort((heroA,heroB)=> {
    let result = heroA.level - heroB.level
    if(result === 0 ){
        return heroA.hero.localCompare(heroB.hero);
    }
});