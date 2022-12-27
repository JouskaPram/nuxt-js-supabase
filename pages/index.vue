<script setup>
const supabase = useSupabaseClient();
const datas = ref();
const route = useRoute();
route.params.id;
async function getdata() {
  const { data, error } = await supabase.from("Pengunjung").select("id,nama,instansi,alamat");
  datas.value = data;
}
async function deleteUser(visit) {
  const { error, status } = await supabase.from("Pengunjung").delete().eq("id", visit.id);
  // console.log(status);
  if (status === 204) {
    alert("data berhasil di hapus");
    getdata();
  }
}
onMounted(() => {
  getdata();
});
</script>
<template>
  <div class="bg-slate-900 h-screen">
    <h1>Isi Buku Tamu</h1>
    <NuxtLink to="/tambah">Tambah</NuxtLink>
    <table width="50px" border="2" class="w-1/2 m-auto text-sm text-left text-gray-500 dark:text-gray-400 mt-24">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
        <tr>
          <td class="py-3 px-6">No</td>
          <td class="py-3 px-6">Nama</td>
          <td class="py-3 px-6">Instansi</td>
          <td class="py-3 px-6">Alamat</td>
          <td class="py-3 px-6">aksi</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(visit, index) in datas" :key="visit.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="py-4 px-6">{{ index + 1 }}</td>
          <td class="py-4 px-6">{{ visit.nama }}</td>
          <td class="py-4 px-6">{{ visit.instansi }}</td>
          <td class="py-4 px-6">{{ visit.alamat }}</td>
          <td class="py-4 px-6">
            <div class="flex">
              <NuxtLink class="py-2 px-4 text-md bg-blue-500 rounded-full text-center font-semibold text-white mx-3" to="/update[id]">Update</NuxtLink>
              <button @click="deleteUser(visit)" class="py-2 px-4 text-md bg-rose-500 rounded-full text-center font-semibold text-white">delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
