import React from 'react';


export const Repository = ({
    link,
    userName,
    avatar,
    description
}) => (
    <li className="rep-item">
        <div>
            <div className="info-item">
                <aside className="rep-name">
                    <a href={link}>{link}</a>
                </aside>
                <aside className="rep-stars">
                </aside>
                <aside className="rep-comit">
                </aside>
            </div>
            <div className="info-user">
                <aside className="pic-av">
                    <img src={avatar} className="pic" alt="alt" />
                </aside>
                <aside className="username">
                    <p>{userName}</p>
                </aside>
            </div>
            <div className="item-description">{description}</div>
        </div>
    </li>
);
