import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

export default function NewsItem({ imageUrl, title, source, description, author, date, newsUrl }) {

  const [darkMode] = useContext(ThemeContext);

  const authorDate = () => {
    let info = 'By ' + author + ' on ' + new Date(date).toGMTString();
    return info.length > 45 ? info.slice(0, 45) : info
  }

  return (
    <div className="card my-2">
      <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
        {source}
      </span>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className={`card-body ${darkMode?"dark-theme":""}`}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p><small className="text-success" data-bs-toggle="tooltip" data-bs-placement="top" title={'By ' + author + ' on ' + new Date(date).toGMTString()}>{authorDate()}</small></p>
        <a rel="noreferrer" href={newsUrl} target="_blank" className={`btn btn-${darkMode?"dark":"primary"} btn-sm`}>Read More</a>
      </div>
    </div>
  )
}
