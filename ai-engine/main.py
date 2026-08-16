from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import time

app = FastAPI(title="NutriVision AI Engine")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "ok", "message": "NutriVision AI Engine is running"}

@app.post("/analyze-waste")
async def analyze_waste(
    image_before: UploadFile = File(...),
    image_after: UploadFile = File(...)
):
    try:
        # NOTE: Ini adalah implementasi awal/dummy untuk MVP.
        # Pada tahap selanjutnya, gambar akan diumpankan ke model YOLO atau U-Net 
        # untuk mendeteksi makanan dan menghitung selisih porsi.
        
        content_before = await image_before.read()
        content_after = await image_after.read()
        
        # Mensimulasikan waktu pemrosesan AI (Computer Vision)
        time.sleep(1.5)
        
        # Hasil prediksi sementara berdasarkan desain mockup (4.2% limbah)
        waste_percentage = 4.2 
        
        return {
            "status": "success",
            "waste_percentage": waste_percentage,
            "detected_components": ["Karbohidrat", "Protein", "Serat"],
            "calories_wasted": 25.5
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
