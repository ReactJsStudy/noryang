import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const BoardList = ({contents, deleteContent,children}) => {
    return (
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th colSpan="5" className="text-right">
                             <Link
                                to="/write"
                                className="btn btn-primary" >Write
                             </Link>
                            </th>
                        </tr>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Date</th>
                            <th>{" "}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contents.map(content =>
                            <tr key={content.id}>
                                <td>{content.id}</td>
                                <td><Link to={'/about/'+content.id}>{content.title}</Link></td>
                                <td>{content.author}</td>
                                <td>{content.date}</td>
                                <td>
                                <input
                                id={content.id}
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => deleteContent(content.id)}
                                defaultValue="delete" />
                                </td>
                            </tr>
                                )}
                    </tbody>
                </table>
        )
}

BoardList.propTypes = {
    contents: PropTypes.array.isRequired,
    deleteContent: PropTypes.func.isRequired
}

export default BoardList;
