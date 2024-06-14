import axios from 'axios'
import toast from 'toastr'
import { goto } from '$app/navigation';
import { writable } from 'svelte/store';

export const loading = writable(false);

export async function signin(email, password) {
    toast.options.preventDuplicates = true;
    toast.options.progressBar = true;
    loading.set(true);
    return;
    setTimeout( function() {
        if (email == 'uvietoboretreasure@gmail.com' && password == '123456789') {
            toast.success('Welcome back, Treasure');
            goto('/auth/verify');
        } else {
            toast.error('Invalid Login Details, use the default values')
        }
        loading.set(false);
    }, 2000);
}