import api from "./api";

export async function getArts(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await api.get("arts/", config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUser(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await api.get("user/", config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getAuthors(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await api.get("arts/authors", config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTypes(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await api.get("arts/types", config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getArtById(token, id) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await api.get(`arts/art/${id}`, config);
    
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getArtByAuthor(token, author) {
  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await api.get(`arts/author/${author}`, config);
    
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getArtByUser(token, userId) {
  if(!token || !userId){
     return
  }
  console.log('testeId', userId)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await api.get(`user/userArts/${userId}`, config);
    
    return response.data;

  } catch (error) {
    console.log(error);
  }
}

export async function getArtByType(token, type) {
 
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await api.get(`arts/type/${type}`, config);
    
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

