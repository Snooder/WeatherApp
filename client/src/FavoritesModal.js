import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

function FavoritesModal({ open, onClose }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Favorites</DialogTitle>
            <DialogContent>
                <p>Favorites functionality will be implemented here.</p>
            </DialogContent>
        </Dialog>
    );
}

export default FavoritesModal;
