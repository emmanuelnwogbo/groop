const baseUrl = `https://api.fusiontreasury.com`;

const myFunc = ()  => {
    if (document.getElementsByTagName('form')) {
      const form = document.getElementsByTagName('form')[0];
      form.id = 'formstore';

      form.lastElementChild.lastElementChild.addEventListener('click', async (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log($('input'));

        const data =  await Array.from($('input')).map(element => {
            console.log(element.value.length)
            console.log(element.value)

            return element.value;
        });

       // console.log(data);

        const details = {
            name: `${data[1], data[2]}`,
            email: `${data[3]}`,
            phone: `${data[4]}`,
            message: `${data[9]}`
        }

        //console.log(details);

        //['prod', 'iuytyu', 'kjhghj', 'lkjhghjk2@gmail.com', '7066575445', 'on', 'on', '615697173245162', '2347066575445', '{"client_ip":"45.88.190.69"}', '45.88.190.69']

        //const details = { name, email, phone, amount, message };

        fetch(`${baseUrl}/api/message`, {
            method: "POST",
            body: JSON.stringify(details),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json())
        .then(json => {
            console.log(json, 'hello there');
        });
      })
    } else {
      setTimeout(myFunc, 15);
    }
}

myFunc();