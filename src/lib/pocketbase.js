import PocketBase from "pocketbase"
const url = "https://blind-stand.pockethost.io";
export const client = new PocketBase(url)
client.autoCancellation(false)

export async function getTasks(){
    return await client.collection("tasks").getFullList();
}

export async function createTask(title, description){
    const data = {title:title, description:description};
    await client.collection("tasks").create(data)
}