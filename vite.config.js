import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

const projectRoot = import.meta.dirname;

export default defineConfig({
  plugins:[react()],
  base:'./',
  build:{
    outDir:'dist',
    rollupOptions:{
      input:{
        home:resolve(projectRoot,'index.html'),
        about:resolve(projectRoot,'about/index.html'),
        contact:resolve(projectRoot,'contact/index.html'),
        generators:resolve(projectRoot,'generators/index.html'),
        chaffCutters:resolve(projectRoot,'chaff-cutters/index.html'),
        products:resolve(projectRoot,'products/index.html'),
        silentGenerator:resolve(projectRoot,'products/silent-diesel-generator/index.html'),
        heavyDutyChaffCutter:resolve(projectRoot,'products/heavy-duty-chaff-cutter/index.html'),
        gallery:resolve(projectRoot,'gallery/index.html')
      }
    }
  }
});
