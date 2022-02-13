echo "######################### Processing started #########################"
echo "######################## Project build started #######################"
npm run build
echo "######################## Project build finished ######################"
cd ./build
echo "### Attempting to copy everything to Shovon588.github.io driectory ###"
cp -r * ../../Shovon588.github.io/
echo "############################ Copy success ############################"
cd ../../Shovon588.github.io
git add .
echo "############################ Add success #############################"
git commit -m "Updated at: $(date)"
sleep 2s
git push
echo "########################## Finished success ###########################"
