import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

const txt = document.createElement('div');
txt.innerHTML = `
<h2>Lorem Ipsum</h2>
<hr>
<blockquote class="blockquote">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere dui eget dui luctus, ac efficitur nibh imperdiet. Nam convallis ullamcorper lacus, id volutpat turpis posuere a. Suspendisse quis condimentum ipsum. Phasellus suscipit mauris lectus, nec ultrices diam suscipit non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur vitae dolor velit. Quisque lobortis leo nec velit aliquam, nec convallis enim semper. Nam nec orci congue, tincidunt augue eu, interdum nisl. Morbi tincidunt semper massa, a iaculis ipsum tempus in. Donec pulvinar velit rutrum lectus mattis lacinia. Duis molestie eleifend maximus. Ut porttitor augue vitae justo vestibulum, sit amet fringilla libero blandit.
</blockquote>
<br/><br/>
Aliquam lacinia venenatis erat ac rhoncus. Fusce nec metus consequat, tristique leo a, viverra erat. Cras vitae lorem ut quam tempus semper a eget purus. Vestibulum laoreet leo sit amet porttitor mattis. Nunc id ipsum vel eros vestibulum pellentesque. Nam dictum nunc et scelerisque tempus. Duis ex risus, pharetra id tortor ut, porttitor placerat turpis.
<br/><br/>
Vivamus nisi libero, pretium eu elit eget, tempor sagittis elit. Quisque condimentum ut dolor quis mollis. Vestibulum mauris ante, hendrerit vel aliquet a, auctor scelerisque ipsum. Aenean sed congue neque, non molestie ante. Praesent ut ipsum fringilla, accumsan ipsum ac, vulputate turpis. Aenean vitae accumsan ipsum, non elementum nulla. Sed at varius erat. Duis ullamcorper, arcu in aliquet convallis, ante ligula suscipit ante, nec interdum neque nunc quis velit. Proin vestibulum imperdiet erat et semper. Nunc tristique sem eu nulla efficitur efficitur. Aliquam tempor, urna quis ornare commodo, ante ipsum iaculis magna, ac varius mi lectus vel est. Praesent nec sapien et urna convallis sollicitudin. Morbi nisi nunc, vehicula eu placerat id, maximus non urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel bibendum nisi.
<br/><br/>
Pellentesque id dolor nec tellus bibendum rhoncus ut in lorem. Sed in orci ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies sapien est. Nunc nibh mauris, pellentesque non facilisis id, consectetur ut erat. In non justo vitae nunc laoreet fringilla ut sit amet turpis. Praesent fringilla faucibus urna et posuere. Nulla eget nunc pellentesque, aliquam massa at, scelerisque ex.
<br/><br/>
Pellentesque ex diam, hendrerit sed magna non, molestie finibus est. Nullam gravida, enim eu dictum dapibus, mi mauris lobortis elit, quis mattis lectus turpis in dui. Ut mattis interdum sollicitudin. Pellentesque quis scelerisque dolor. Ut elit ipsum, porttitor id libero sit amet, scelerisque hendrerit augue. Nullam feugiat aliquet sagittis. Pellentesque non elit sodales, tempor mauris vel, tempus mauris. Nullam dictum nulla in nulla pulvinar, eget posuere metus ornare. Sed sem magna, varius a est sed, viverra molestie enim. Sed imperdiet ipsum at vestibulum efficitur. Phasellus ut facilisis velit.
<br/><br/>
Nunc elementum tempor mauris sit amet maximus. Phasellus eget iaculis nisi. Cras auctor mi non leo posuere pharetra sit amet sit amet nisl. Sed gravida condimentum dui et fermentum. Nulla sed nisl sit amet odio tincidunt ornare. Proin felis elit, imperdiet et bibendum eu, varius sodales nibh. Curabitur enim quam, consequat et orci sed, elementum porttitor lorem. Fusce in massa id est consectetur sollicitudin. Ut tempus, orci at faucibus imperdiet, diam diam aliquet urna, vel varius diam lectus et nunc. Sed id massa egestas nisl suscipit ultrices ut eu lorem. Cras tristique convallis augue, a tempus risus placerat in. Etiam malesuada aliquam quam, et pulvinar risus venenatis at. Quisque dapibus diam vel ex vulputate ultricies. Nullam quis nisi eget sapien facilisis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non cursus nunc, id malesuada ipsum.
<br/><br/>
Nullam sed interdum odio. Morbi vulputate neque sed accumsan dictum. Integer convallis mi ut nisi volutpat ullamcorper. Pellentesque fermentum finibus ex et suscipit. Pellentesque cursus erat eu posuere scelerisque. Praesent laoreet urna quis velit iaculis, in elementum magna posuere. Pellentesque hendrerit semper mi, a finibus lorem aliquet sit amet. Phasellus et volutpat arcu. Nunc lobortis posuere enim, mollis auctor nibh ultricies vel. Mauris consequat eu nisi vitae varius. Etiam eget purus in neque vehicula viverra vitae facilisis turpis. Quisque volutpat tellus vel erat lobortis, fermentum dapibus ante imperdiet. Etiam et est iaculis risus placerat dignissim. Maecenas egestas velit in blandit rutrum. Ut tempor facilisis leo in dignissim. Aenean aliquam quam sapien, non consectetur magna dapibus eget.
<br/><br/>
Ut lacinia metus et lorem bibendum, vel viverra erat laoreet. Ut velit sem, ultricies in tortor eu, consequat venenatis enim. Nulla semper accumsan nisl, convallis facilisis ex ultricies et. Nulla faucibus ipsum ac vehicula elementum. Curabitur nec finibus nunc, at condimentum magna. Nulla lacinia porta luctus. Phasellus molestie pharetra pharetra. Maecenas ac tincidunt arcu. Suspendisse pretium pharetra mi, vitae bibendum turpis. Nulla vitae nibh euismod, ultricies est at, ultricies sapien. Nunc vitae nisl non est euismod bibendum ac nec mi. Etiam diam leo, viverra nec fringilla vitae, tempus at urna. Ut dapibus pellentesque aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<br/><br/>
Donec porttitor in dui eu tristique. Phasellus vestibulum ante id ante posuere, lobortis elementum nunc interdum. Integer mauris sem, vulputate ut ipsum vitae, efficitur facilisis enim. Suspendisse vitae efficitur erat. Vestibulum non dapibus tellus, a pharetra elit. Curabitur lobortis libero nec neque finibus, sed auctor elit venenatis. Aenean ut diam pulvinar, tristique magna sed, volutpat erat. Vivamus id pretium lacus, at laoreet nisl. Proin quis tempor ipsum. Duis tincidunt accumsan tortor, quis blandit turpis ornare sed. Ut feugiat ipsum nulla, vel euismod massa facilisis a.
<br/><br/>
Nunc magna diam, sagittis eget porttitor sed, vestibulum ut velit. Suspendisse potenti. Donec sodales elit nisl, eu ornare orci gravida eget. Quisque porta consectetur diam et ultrices. Donec pulvinar, risus sed vestibulum iaculis, nulla ligula ultrices mi, nec volutpat ligula nisi eu libero. Mauris venenatis nisi et risus volutpat molestie. Aenean luctus dui et lectus lobortis pretium. Fusce vel mauris lectus. Sed at magna et diam condimentum accumsan a non ex. Maecenas augue nibh, viverra vel orci quis, molestie feugiat sem. Quisque sodales massa sed laoreet sodales. Vivamus semper dignissim leo. Integer id felis vel risus eleifend porta. Phasellus sodales id urna et pretium.
<br/><br/>
Quisque quis diam mi. Duis commodo est sed lacus placerat, a finibus elit molestie. Vestibulum fermentum, libero nec sollicitudin iaculis, erat libero cursus purus, vel consectetur metus ipsum non augue. Proin pulvinar luctus purus a congue. Nam bibendum convallis elit, nec cursus ante pretium dignissim. Integer tempus, enim et luctus pretium, erat mauris vehicula tortor, non tristique quam velit vitae eros. Praesent pellentesque sem non tempor mollis. Phasellus ac tincidunt mauris, sed ullamcorper lectus. Sed non dignissim erat, imperdiet feugiat nisl. Pellentesque vestibulum lectus vitae nisi iaculis malesuada. Sed convallis tempor ipsum, ut dignissim augue commodo a. Phasellus sit amet massa at nunc pretium luctus in a nisi. Aenean at condimentum risus.
<br/><br/>
Proin nisl risus, fringilla et dui a, euismod egestas felis. Suspendisse a vehicula risus. Sed in nulla vel sapien vestibulum semper. Duis facilisis nec metus id malesuada. Nullam aliquet mi dui, id lacinia ex auctor et. Morbi eget ligula quis massa rhoncus consectetur eget id nisi. Nunc rhoncus est enim, vitae vestibulum elit dignissim ut.
<br/><br/>
Nunc nibh lectus, placerat ac diam ac, pulvinar pretium enim. Morbi quis auctor sem. Praesent porttitor nisl id ligula volutpat, in iaculis magna venenatis. Donec id orci in quam elementum gravida vitae id mi. Donec turpis elit, egestas venenatis diam at, fermentum efficitur magna. Duis commodo tincidunt imperdiet. Sed vel purus vel urna lacinia posuere id non est. Phasellus scelerisque a nisl imperdiet iaculis. Ut aliquet finibus mauris, eget iaculis ipsum luctus vel.
<br/><br/>
Quisque fringilla feugiat justo, vitae viverra ipsum accumsan ac. Aenean arcu justo, suscipit a vehicula malesuada, vestibulum id dui. Vestibulum fermentum tellus at purus vulputate elementum. Praesent vestibulum imperdiet nibh, nec lobortis augue molestie eget. Duis at tortor ut dolor maximus aliquam. Cras tincidunt ex dictum mi molestie congue. Proin nec ipsum tellus. Nulla congue dignissim odio quis faucibus. Curabitur hendrerit leo vel accumsan vulputate. Suspendisse potenti.

`

const body = document.body;

body.append(txt);


const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

// calculate progress
const calculateScrollPercentage = (event) => {
    const { 
        scrollTop, 
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / ( scrollHeight - clientHeight)) * 100;
}

// streams

const scroll$ = fromEvent(document, 'scroll');

// scrolls.subscribe(console.log);

const progress = scroll$.pipe(map(calculateScrollPercentage));

progress.subscribe( percent => {
    progressBar.style.width = `${percent}%`;
})

