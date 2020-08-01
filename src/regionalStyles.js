const regionalStyles = {
    kanto: 'linear-gradient(147deg, #FFE53B 0%, #fd8181 74%)',
    johto: 'linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)',
    hoenn: 'linear-gradient(147deg, #98b1ff 0%, #fdf381 74%)',
    sinnoh: 'linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)',
    unova: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
    kalos: 'linear-gradient(147deg, #ff8789 0%, #eaffa6 74%)',
    alola: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)'
}

function getBackground(dexNumber) {
    return dexNumber <= 151 ?
        regionalStyles.kanto :
        dexNumber <= 251 ?
            regionalStyles.johto :
            dexNumber <= 386 ?
                regionalStyles.hoenn :
                dexNumber <= 493 ?
                    regionalStyles.sinnoh :
                    dexNumber <= 649 ?
                        regionalStyles.unova :
                        dexNumber <= 721 ?
                            regionalStyles.kalos :
                            regionalStyles.alola
}

export default getBackground