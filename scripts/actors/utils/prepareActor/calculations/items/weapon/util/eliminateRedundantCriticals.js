const eliminateRedundantCriticals = (weapon) =>{
    let critic = weapon.system.critic;
    let criticals = [];
    if(critic.other){
        if(typeof critic.other === "string") critic.other = critic.other.split(",");
        for (const c of critic.other){
        if(!criticals.includes(c) && critic.primary.value != c && critic.secondary.value != c)
            criticals.push(c);
        }
        return criticals;
    }else return [];

}
export {eliminateRedundantCriticals}