import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';



const Manager = () => {
    const ref = useRef();
    const ref2 = useRef();
    const [form, setform] = useState({ site: '', username: '', password: '' })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem('passwords');
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])


    const showPassword = async () => {
        if (ref.current.type === 'text') {
            ref.current.type = 'password'
            ref2.current.classList.remove('fa-eye-slash')
            ref2.current.classList.add('fa-eye')

        } else {
            ref.current.type = 'text'
            ref2.current.classList.remove('fa-eye')
            ref2.current.classList.add('fa-eye-slash')

        }
    };
    const savePassword = () => {
        setpasswordArray([...passwordArray, {...form, id:uuidv4()}])
        localStorage.setItem('passwords', JSON.stringify([...passwordArray, {...form, id:uuidv4()}]))
        setform({ site: '', username: '', password: '' })
        toast.success('Passwords Saved')
    }

    const saveHandaler = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    const copyText = (text) => {
        toast.success('text copied');
        navigator.clipboard.writeText(text)
    }

    const deletePasswords= (id)=>{
        let c= confirm('Do You Really Want To delete??')
        if (c){
            setpasswordArray(passwordArray.filter(item=>item.id!=id))
            localStorage.setItem('passwords', JSON.stringify(passwordArray.filter(item=>item.id!=id)))
            toast.success('Passwords Deleted ');
        }else{
            toast.error('password not deleted')
        }
    }

    const editPasswords= (id)=>{
        setform(passwordArray.filter(item=>item.id===id)[0])
        setpasswordArray(passwordArray.filter(item=>item.id!=id))
        toast.success('Passwords Edited ');
    }

    return (
        <>
            <div className="absolute top-0 z-[-2] h-full w-screen rotate-180 transform bg-green-50 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
            </div>
            <div className=" mycontainer w-full ">
                <h1 className='text-4xl font-bold text-center'><span className='text-green-500'>&lt;</span>
                    Pass<span className='text-green-500'>OP/&gt;</span></h1>
                <p className='text-green-900 text-lg text-center mb-3.5'>Your Own Password Manager</p>

                <div className='text-black flex flex-col  gap-5 items-center'>
                    <input onChange={saveHandaler} value={form.site} placeholder='Enter Website URL' className='rounded-full border border-green-600 w-full text-black p-4 py-1' type="text" name='site' />
                    <div className="flex gap-4 flex-col md:gap-8  md:flex-row w-full justify-between ">
                        <input onChange={saveHandaler} value={form.username} placeholder='Enter UserName' className='rounded-full border border-green-600 w-full text-black p-4 py-1' type="text" name='username' />
                        <div className="relative">
                            <input onChange={saveHandaler} ref={ref} value={form.password} placeholder=' Enter Password' className='rounded-full border border-green-600 w-full text-black p-4 py-1' type="password" name='password' />
                            <span className='absolute right-0 top-1 pr-2 cursor-pointer' onClick={showPassword}><i ref={ref2} className="fa-solid fa-eye"></i></span>
                        </div>
                    </div>

                    <button onClick={savePassword} className=' flex justify-center items-center bg-green-500 w-fit rounded-full px-6 py-1 gap-2 hover:bg-green-300 border-2 border-green-900 ' type='button'><lord-icon
                        src="https://cdn.lordicon.com/efxgwrkc.json"
                        trigger="hover">
                    </lord-icon>Add</button>
                </div>
                <div className="passwords">
                    <h1 className='font-bold'>Your Passwords</h1>
                    {passwordArray.length === 0 && <div>No passwoads to show</div>}
                    {passwordArray.length != 0 && <table className='table-auto w-full mt-4 text-white rounded-md overflow-hidden'>
                        <thead className='bg-green-800'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>UserName</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100 text-black'>
                            {passwordArray.map((item, index) => {

                                return <tr key={item.id}>
                                    <td className='text-center  py-2 '>
                                        <div className='flex  justify-center' onClick={() => { copyText(item.site) }}>
                                            <a href={item.site} target='_blank'>{item.site}</a>
                                            <div>
                                                <lord-icon className='cursor-pointer h-6'
                                                    src="https://cdn.lordicon.com/cfkiwvcc.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-center  py-2'>
                                        <div className="flex  justify-center" onClick={() => { copyText(item.username) }}>{item.username}
                                            <div>
                                                <lord-icon className='cursor-pointer h-6'
                                                    src="https://cdn.lordicon.com/cfkiwvcc.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-center  py-2'>
                                        <div className="flex   justify-center text-ty"  onClick={() => { copyText(item.password) }}>{item.password}
                                            <div>
                                                <lord-icon className='cursor-pointer h-6'
                                                    src="https://cdn.lordicon.com/cfkiwvcc.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-center  py-2'>
                                        <span className='cursor-pointer mx-3'onClick={()=>{editPasswords(item.id)}}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/exymduqj.json"
                                                trigger="hover"
                                                state="hover-line"
                                                stroke="bold"
                                                className='h-5'>
                                            </lord-icon>
                                        </span>
                                        <span className='cursor-pointer' onClick={()=>{deletePasswords(item.id)}}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/xyfswyxf.json"
                                                trigger="hover"
                                                className='h-5'>
                                            </lord-icon>
                                        </span>
                                    </td>

                                </tr>

                            })}


                        </tbody>
                    </table>}
                </div>
            </div>

        </>
    )
}

export default Manager
