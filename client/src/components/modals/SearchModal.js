import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

function SearchModal({ open, onClose }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Search</DialogTitle>
            <DialogContent>
                <p>Search functionality will be implemented here.</p>
            </DialogContent>
        </Dialog>
    );
}

export default SearchModal;
