import React from 'react';
import { Link } from 'react-router-dom';


export const Repository = ({ repositoryInfo }) => {
    const {
        link,
        userName,
        avatar,
        description,
    } = repositoryInfo;

    return (
        <li className="rep-item">
            <div>
                <div className="info-item">
                    <aside className="rep-name">
                        <a href={link}>{link}</a>
                    </aside>
                    <aside className="rep-stars" />
                    <aside className="rep-comit" />
                </div>
                <div className="info-user">
                    <aside className="pic-av">
                        <img src={avatar} className="pic" alt="alt" />
                    </aside>
                    <Link to="/repository">
                        <aside className="username">
                            <p>{userName}</p>
                        </aside>
                    </Link>
                </div>
                <div className="item-description">{description}</div>
            </div>
        </li>
    );
};
