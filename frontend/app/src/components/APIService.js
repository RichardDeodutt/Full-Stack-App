export default class APIService {
    static UpdateArticle(id, body) {
        return fetch(`${BackendRoot}/update/${id}/`, {
            'method':'PUT',
            headers: {
              'Content-Type':'application/json'
      
            },
            body: JSON.stringify(body)
          })
          .then(resp => resp.json())
    }

    static InsertArticle(body) {
        return fetch(`${BackendRoot}/add/`, {
            'method':'POST',
            headers: {
              'Content-Type':'application/json'
      
            },
            body: JSON.stringify(body)
          })
          .then(resp => resp.json())
    }


    static DeleteArticle(id) {
        return fetch(`${BackendRoot}/delete/${id}/`, {
            'method':'Delete',
            headers: {
              'Content-Type':'application/json'
      
            },
            
          })
          
    }



}


