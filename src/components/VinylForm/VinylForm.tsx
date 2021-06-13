import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface VinylFormProps {
    id?:string;
    data?:{}
}

interface VinylState {
    name: string;
    price: string;
}

export const VinylForm = (props:VinylFormProps) => {

    const dispatch = useDispatch();
    let { vinylData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<VinylState>(state => state.name)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            server_calls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Vinyl</label>
                    <Input {...register('name')} name="name" placeholder='Vinyl' />
                </div>
                <div>
                    <label htmlFor="label">Label</label>
                    <Input {...register('label')} name="label" placeholder="Label"/>
                </div>
                <div>
                    <label htmlFor="format">Format</label>
                    <Input {...register('format')} name="format" placeholder="Format"/>
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <Input {...register('country')} name="country" placeholder="Country"/>
                </div>
                <div>
                    <label htmlFor="released">Released</label>
                    <Input {...register('released')} name="released" placeholder="Released"/>
                </div>
                <div>
                    <label htmlFor="genre">Genre</label>
                    <Input {...register('genre')} name="genre" placeholder="Genre"/>
                </div>
                <div>
                    <label htmlFor="style">Style</label>
                    <Input {...register('style')} name="style" placeholder="Style"/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}