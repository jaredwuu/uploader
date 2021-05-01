import React, { Fragment } from 'react'

const FileUpload = () => {
    return (
        <Fragment>
            <form>
                <div className="input-group mb-3">
                    <input type="file" className="form-control" id="inputGroupFile02" />
                </div>
                <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4"/>
                <div class="input-group mt-3">
                    <input type="file" className="form-control" id="inputGroupFile02" />
                    <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                </div>
            </form>
        </Fragment>
    )
}

export default FileUpload
