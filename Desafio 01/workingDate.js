    // let pedidoCriado = prompt('Digite a data do pedido no formato: YYYY-MM-DD')
    // try {
    //     // pedidoCriado = parseInt(pedidoCriado)
    //     // console.log('A data foi transformada para inteiro.')
       
    //     console.log('data criada')
    //     console.log(create)
    //     console.log(typeof(create))
    // } catch (error) {
    //     console.log('Não foi possível transformar em inteiro.')
    // }

    // let pedidoEntregue = prompt('Digite a data em que ele foi entregue no formato: YYYY-MM-DD')
    // try {
    //     // pedidoEntregue = parseInt(pedidoEntregue)
    //     // console.log('A pedidoEntregue foi transformada para inteiro.')
        
    //     console.log('data criada')
    //     console.log(delivery)
    //     console.log(typeof(delivery))
    // } catch (error) {
    //     console.log('Não foi possível transformar em inteiro. pedidoEntregue')
    // }

    // let previsao = prompt('Digite quantos dias era previsto para a entrega no formato: YYYY-MM-DD')
    // try {
    //     previsao = '10'
    //     previsao = parseInt(previsao)
    //     console.log('A previsao foi transformada para inteiro.')
    // } catch (error) {
    //     console.log('Não foi possível transformar em inteiro. previsao')
    // }


    create = new Date(2024, 11, 18)
    delivery = new Date(2024, 11, 25)
    let previsao = 7;

    let diferencaMS = Math.abs(create - delivery)
    let diferencaDia = Math.ceil(diferencaMS / (1000 * 60 * 60 * 24))
    console.log(diferencaDia)
    
    if(diferencaDia <= previsao){
        console.log('pedido entregue dentro da previsão')
    }else{
        console.log('pedido não foi entregue dentro do praso')
    }







