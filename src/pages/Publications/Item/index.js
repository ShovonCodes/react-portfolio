import React from 'react';

const PublicationItem = ({date, title, company, children, classNames = '', url = ''}) => {
    return (
        <div className={`resume-item ${classNames}`}>
            <div className="resume-item__experience">
                <div>
                    <div className="resume-item__date">
                        {date}
                    </div>
                    <div className="resume-item__company">
                        <p>
                            {title.toUpperCase()}
                        </p>
                        <h3>
                            {company}
                        </h3>
                    </div>
                </div>
            </div>
            <p className="resume-item__desc">
                {children}
            </p>

            { url && <a href={url} target='_blank' rel='noreferrer'>Publication URL</a>}
        </div>
    );
};

export default PublicationItem;
