const replaceMacroBar = async () => {
    let attack = document.querySelectorAll("#custom-hotbar-send-attack");
    if(attack.length>0)
        attack[0].click(()=>{window.Websocket.sendAttack?.();})
    let request = document.querySelectorAll("#custom-hotbar-send-attack");
    if(request.length>0)
        request[0].click(()=>{window.Websocket.sendAttackRequest?.();})
}

export {replaceMacroBar}
