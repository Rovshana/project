$('document').ready(()=>{
    $('#submit').on('click', function(){
        let  book = $('#search').val()
        getBook(book)
    })


    let getBook = (info) =>{
        $.ajax({
            method: 'GET',
            url: `https://hapi-books.p.rapidapi.com/search/${info}`,
            headers: {
              'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
              'X-RapidAPI-Key': '940c97028cmsh3b5ebd60839f490p1f6a67jsn622ba3da29f4'
            }
            
           
        }).done((info)=>{
            console.log(info)
            $('#empty').html(`<h1>${info[0].name}</h1>
            <img src="${info[0].cover}" style = "width: 250px">
            <p>${info[0].authors}</p>


            `)

        })
    }
})