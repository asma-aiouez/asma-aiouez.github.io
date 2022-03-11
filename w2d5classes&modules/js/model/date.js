
/**
 * formatting date: yyyy-mm-dd
 */
export const dateFormt = function(date){
    return `${date.getFullYear()}-${(date.getMonth()+1)}-${date.getDate()}`;
}