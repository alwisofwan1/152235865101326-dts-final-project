import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { firestore } from '../firebase.config';

// Saving new Item
export const saveItem = async (data) => {
  await addDoc(collection(firestore, 'foodItems'), data);
};

// getall food items
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, 'foodItems'), orderBy('created_at', 'desc'))
  );

  return items.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
};

// Get related food items
export const getRelatedFoodItems = async (category) => {
  try {
    const items = await getDocs(
      query(
        collection(firestore, 'foodItems'),
        where('category', '==', category)
      )
    );

    return items.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    console.log(error);
  }
};

// get food item by id
export const getFoodItemById = async (id) => {
  try {
    const docRef = doc(firestore, 'foodItems', id);
    const item = await getDoc(docRef).then((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return item;
  } catch (error) {
    console.log(error);
  }
};

// get user by id
export const getUserById = async (id) => {
  const user = await getDocs(query(collection(firestore, 'users'), doc(id)));

  return user.docs.map((doc) => doc.data());
};
