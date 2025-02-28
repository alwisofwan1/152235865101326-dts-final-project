/* eslint-disable no-empty-pattern */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';

import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
  MdAttachMoney,
} from 'react-icons/md';
import { categories } from '../utils/data';
import Loader from '../components/Loader';
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { storage } from '../firebase.config';
import { getAllFoodItems, saveItem } from '../utils/firebaseFunctions';
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';
import toast, { Toaster } from 'react-hot-toast';
import dayjs from 'dayjs';

const CreateContainer = () => {
  const [title, setTitle] = useState('');
  const [calories, setCalories] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [{}, dispatch] = useStateValue();

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // const uploadProgress =
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        toast.error('Kesalahan saat mengunggah: Coba lagi 🙇', {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            fontSize: '12px',
          },
        });
        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          toast.success('Gambar berhasil diunggah', {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
              fontSize: '12px',
            },
          });
        });
      }
    );
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      toast.success('Gambar berhasil dihapus', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '12px',
        },
      });
    });
  };

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (
        !title ||
        !calories ||
        !imageAsset ||
        !price ||
        !category ||
        !description
      ) {
        toast.error('Kolom wajib diisi tidak boleh kosong', {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            fontSize: '12px',
          },
        });
      } else {
        const data = {
          title: title,
          imageURL: imageAsset,
          category: category,
          calories: calories,
          created_at: dayjs().format('DD MMMM YYYY, HH:mm:ss:sss'),
          qty: 1,
          price: price,
          description: description,
        };
        saveItem(data);
        setIsLoading(false);
        toast.success('Data berhasil ditambahkan 😊', {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            fontSize: '12px',
          },
        });

        clearData();
      }
    } catch (error) {
      console.log(error);
      toast.error('Kesalahan saat mengunggah: Coba lagi 🙇', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '12px',
        },
      });
    }

    fetchData();
  };

  const clearData = () => {
    setTitle('');
    setImageAsset(null);
    setCalories('');
    setPrice('');
    setDescription('');
    setCategory('Pilih Kategori');
  };

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='w-[90%] md:w-[50%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4'>
        <Toaster />
        <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
          <MdFastfood className='text-xl text-gray-700' />
          <input
            type='text'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Masukkan Judul'
            className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'
          />
        </div>

        <div className='w-full'>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className='outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer'
          >
            <option value='other' className='bg-white'>
              Pilih Kategori
            </option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className='text-base border-0 outline-none capitalize bg-white text-headingColor'
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>

        <div className='group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-340 cursor-pointer rounded-lg'>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                    <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
                      <MdCloudUpload className='text-gray-500 text-3xl hover:text-gray-700' />
                      <p className='text-gray-500 hover:text-gray-700'>
                        Klik untuk upload
                      </p>
                    </div>
                    <input
                      type='file'
                      name='uploadimage'
                      accept='image/*'
                      onChange={uploadImage}
                      className='w-0 h-0'
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className='relative h-full'>
                    <img
                      src={imageAsset}
                      alt='uploaded image'
                      className='w-full h-full object-cover'
                    />
                    <button
                      type='button'
                      className='absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out'
                      onClick={deleteImage}
                    >
                      <MdDelete className='text-white' />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <div className='w-full flex flex-col md:flex-row items-center gap-3'>
          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdFoodBank className='text-gray-700 text-2xl' />
            <input
              type='text'
              required
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              placeholder='Kalori'
              className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'
            />
          </div>

          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdAttachMoney className='text-gray-700 text-2xl' />
            <input
              type='text'
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder='Harga'
              className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'
            />
          </div>
        </div>

        <div className='w-full flex flex-col md:flex-row items-center gap-3'>
          <textarea
            id='message'
            rows='6'
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none'
            placeholder='Deskripsi'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className='flex items-center w-full'>
          <button
            type='button'
            className='ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-orange-500 px-12 py-2 rounded-lg text-lg text-white font-semibold'
            onClick={saveDetails}
          >
            Tambah
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateContainer;
