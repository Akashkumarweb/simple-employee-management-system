import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Category = () => {

    const [category, setCategory] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3000/auth/category')
            .then(result => {
                if (result.data.Status) {
                    setCategory(result.data.Result);
                } else {
                    alert(result.data.Error || "Failed to fetch categories");
                    setCategory([]); // Fallback to an empty array
                }
            })
            .catch(err => {
                console.log(err);
                alert("Failed to fetch categories due to a network or server error.");
                setCategory([]); // Fallback to an empty array
            });
    }, []);


    return (
        <div className='px-5 mt-3'>
            <div className='d-flex justify-content-center'>
                <h3>Cetegory List</h3>
            </div>
            <Link to="/dashboard/add_category" className='btn btn-success'>Add Cetegory</Link>
            <div className='mt-3'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            category.map(c => (
                                <tr key={c.id}>
                                    <td>{c.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Category