# timyo-www
Timyo website

### Setup Development Environment
```
$ git clone https://github.com/nappels/timyo-www.git # Clone repository
$ make harp       # Install Bower and Harp
$ make install    # Install project dependencies
$ harp server     # Start Harp server
```

### Compile website files for deployment
```
$ harp compile
```

Files will be compiled into /www directory. Everything will minified and ready for deployment.

### Harp JS framework docs
http://harpjs.com/

Refer to these docs for information regarding using partials and data throughout the app.

### Generate sprites
1. Install [Glue](http://glue.readthedocs.io/en/latest/installation.html)
2. `cd` into `/public/sprite_assets/`
3. Generate sprite. This command will generate the common_sprite. Change "common_sprite" in this command to either "results_sprite" or "teams_sprite" to generate the other sprites.
```
glue public/assets/sprite_assets/common_sprite public/assets/sprites --margin=1 --padding=1 --retina --namespace='' --sprite-namespace='' --pseudo-class-separator=_
```
4. Copy the generated CSS in the `/public/sprites/` directory to appropriate section of `/public/styles/_sprites.less`.
5. Move generated sprites images in `/public/sprites/` directory to `/public/images/` directory. You will need to change the name of these images to match the current name of the sprites. You may also want to optimize the images before deploying.
