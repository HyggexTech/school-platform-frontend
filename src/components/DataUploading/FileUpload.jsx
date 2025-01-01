import React, { useState, useCallback } from 'react';
import { Upload, X } from 'lucide-react';

const FileUpload = ({ onFileSelect }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [file, setFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleDragEnter = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            setFile(droppedFile);
            onFileSelect(droppedFile);
            simulateUpload();
        }
    }, [onFileSelect]);

    const handleFileSelect = useCallback((e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            onFileSelect(selectedFile);
            simulateUpload();
        }
    }, [onFileSelect]);

    const simulateUpload = () => {
        setUploadProgress(0);
        const interval = setInterval(() => {
            setUploadProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 10;
            });
        }, 300);
    };

    const removeFile = useCallback(() => {
        setFile(null);
        setUploadProgress(0);
    }, []);

    return (
        <div className="md:w-[600px] mx-auto bg-[#f4f9ff] shadow-[0px_0px_4px_0px_#E6E9EE] ">
            <div
                className={`border-2 border-dashed rounded-lg p-8 ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                    }`}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <div className="flex flex-col items-center justify-center text-center">
                    <Upload className="w-12 h-12 text-gray-400 mb-4" />
                    <p className="text-gray-600 mb-2">
                        Drag and drop your student CSV file into the box below
                    </p>
                    <p className="text-gray-500 mb-4">OR</p>
                    <label className="bg-[#305196] text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-[#1f2857] transition-colors">
                        Browse files manually from your device.
                        <input
                            type="file"
                            className="hidden"
                            onChange={handleFileSelect}
                            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        />
                    </label>
                </div>
            </div>

            {file && (
                <div className="mt-4">
                    <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                        <span className="text-sm text-gray-600">{file.name}</span>
                        <button
                            onClick={removeFile}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="mt-2 bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default FileUpload
