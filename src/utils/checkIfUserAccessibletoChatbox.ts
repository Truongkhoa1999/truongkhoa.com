export const checkIfUserAccessibletoChatbox = (isChatboxExpanded: boolean, didUserSelectRole:boolean) =>{
if (isChatboxExpanded && didUserSelectRole ){
    return true
} else{
    return false
}
}