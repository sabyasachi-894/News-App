import React from 'react'

const Newsitem = (props) => {
    
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card" style={{ margin: "20px" }}>
                    <img src={!imageUrl ? "https://static.toiimg.com/photo/msid-86250407/86250407.jpg?pl=37494" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "85%"}}>
                            {source}
                        </span></h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }


export default Newsitem
