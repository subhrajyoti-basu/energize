import axios from "axios";
import { useState } from "react";

function EmailForm() {
    const [formData, setformData] = useState()
    const [show, setshow] = useState(false)

    function handleChange(event) {
        setformData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('https://sheet.best/api/sheets/12abc377-5ffc-4bb5-8860-471164a3d634', formData)
        .then(response => {
            setshow(true)
        })

        
    }
    return (
        <>
            {!show && <form onSubmit={handleSubmit} method="post" className="max-w-[534px] mx-auto">
                <div className='space-y-3'>
                    <div className='flex space-x-3'>
                        <input type="text" name="fname" placeholder='First Name' id="" onChange={handleChange} />
                        <input type="text" name="lname" placeholder='Last Name' id="" onChange={handleChange} />
                    </div>
                    <input type="tel" name="phone" id="" placeholder='Contact Number (Country code not required)' className='w-full' onChange={handleChange} />
                    <div className='flex items-center'>
                        <input className='w-auto mr-2' type="checkbox" name="iswhatsapp" id="iswhatsapp" value={true} onChange={handleChange} />
                        <label htmlFor='iswhatsapp'>Is above number your whatsapp number?</label>
                    </div>
                    <input type="email" name="email" id="" placeholder='Email ID' onChange={handleChange} />
                    <select id="inputState" name="state" onChange={handleChange}>
                        <option value="SelectState">Select State</option>
                        <option value="Andra Pradesh">Andra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madya Pradesh">Madya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Orissa">Orissa</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttaranchal">Uttaranchal</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadeep">Lakshadeep</option>
                        <option value="Pondicherry">Pondicherry</option>
                    </select>
                    <input type="text" name="location" placeholder="location" id=""  onChange={handleChange}/>
                    <div className='flex items-center'>
                        <input className='w-auto mr-2' type="checkbox" name="newsletter" id="newsletter" value={true} onChange={handleChange} />
                        <label htmlFor='newsletter'>Get app link and promotional messages from Energize?</label>
                    </div>
                    <div className="flex justify-center pt-10">
                    <button color="blue" type='submit'>Submit</button>
                    </div>
                </div>
            </form>}
            {show && <h4 className="w-[400px] text-center mx-auto mb-36 text-[20px] font-medium text-green-700">
                    Thank you for showing interest. You will hear back from us soon!!
                </h4>}
        </>
    );
}

export default EmailForm;