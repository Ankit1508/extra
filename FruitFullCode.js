  //this code can be used for showing pdf/img/documents on frontend

          {item.type === "pdf" && (
            <embed src={item.url} width="100%" height="650px" />
          )}
          {item.type === "image" && (
            <img src={item.url} alt="report" width="100%" height="650px" />
          )}
          {item.type === "document" && (
            <iframe
              src={item.url}
              width="100%"
              height="650px"
              allowfullscreen
              webkitallowfullscreen
              title={index}
            />
          )}
