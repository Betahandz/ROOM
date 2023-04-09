export const pic_title = [
    {
        title: "Discover innovative ways to decorate",
        subtitle: " We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        photo: "images/desktop-image-hero-1.jpg"
    }, 
    {
        title: "We are available all across the globe",
        subtitle: " With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        photo: "images/desktop-image-hero-2.jpg"
    },
    {
        title: "Manufactured with the best materials",
        subtitle: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        photo: "images/desktop-image-hero-3.jpg"
    }
]
export const createGallery = (arr, elem) => {
    let gallery = arr.map ((item, index, arr) => {
        // using literals
        return `
        <figure class="prod_pic">
            <img src=${item.photo} alt="">
        </figure>`
    });
    
    elem.innerHTML += gallery.join("");
}
export const moveForward = (elem, styling, change ) => {
    if (change) {
        let num = 0;
        elem.forEach(item => {
            item.classList.remove(styling[num]);
            num++;
        })
    
        num = 0;
    
        let pop = styling.pop();
        styling.unshift(pop);
    
        elem.forEach((item, index, arr) => {
            item.classList.add(styling[num]);
            num++;
        })
    } else {
        let num = 0;
        elem.forEach(item => {
            item.classList.remove(styling[num]);
            num++;
        })
    
        num = 0;
    
        let shift = styling.shift();
        styling.push(shift);
    
        elem.forEach((item, index, arr) => {
            item.classList.add(styling[num]);
            num++;
        })
    }
}
export const order = ( time, condition, command ) => {
    return new Promise((resolve, reject) => {
        if(condition) {
            setTimeout(() => {
                resolve( command() );
            }, time);
        }else {
            reject()
        }
    })
}