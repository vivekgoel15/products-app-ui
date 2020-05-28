import React from 'react';

const Loader = () => {
    return (
        <>
            <div class="d-flex justify-content-center">
            <div class="spinner-grow text-dark" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            </div>

        </>
      );
}

export default Loader;